#! /usr/bin/env ruby

require 'fileutils'
require 'nokogumbo'
require 'htmlbeautifier'

# Call from the root directory.
# ruby scripts/tex2md.rb PATH_TO_MAIN.tex PATH_TO_BIB.bib PATH_TO_PUB.md
tex = ARGV[0];
bib = ARGV[1];
md  = ARGV[2];

# To run latexml:
# brew install imagemagick
# brew install cpanm
# sudo cpanm Archive::Zip DB_File File::Which Getopt::Long Image::Size IO::String JSON::XS LWP MIME::Base64 Parse::RecDescent Pod::Parser Text::Unidecode Test::More URI XML::LibXML UUID::Tiny common::sense Image::Magick
# brew install latexml
`latexml #{tex} --dest=scripts/out/tex2md.xml`
`latexml #{bib} --dest=scripts/out/tex2md.bib.xml`
`latexmlpost scripts/out/tex2md.xml --dest=scripts/out/tex2md.html --bibliography=scripts/out/tex2md.bib.xml`

# Parse latexmlpost output and find relevant sections

doc = Nokogiri::HTML5(IO.read('scripts/out/tex2md.html'))

# Improve semantics
h6 = doc.css('h6')
h6.each do |h| 
  h.name = 'h2'
  if h.content == 'Acknowledgements.'
    h.content = 'Acknowledgements'
  end
end

strong = doc.css('.ltx_font_bold')
strong.each {|e| e.name = 'strong'}

emph = doc.css('.ltx_font_italic')
emph.each {|e| e.name = 'emph'}

abstract = doc.at_css('.ltx_abstract')
abstract.name = 'section'
abstract['id'] = 'abstract'

teaser_img = doc.at_css('#p1 img')
teaser_img['alt'] = ''
teaser_caption = doc.at_css('#p1 .ltx_caption')
teaser_caption.name = 'figcaption'

sections = doc.css('.ltx_section, .ltx_bibliography')

out = Nokogiri::HTML5::Document.new
article = Nokogiri::XML::Node.new('article', out)
article.parent = out

teaser_fig = Nokogiri::XML::Node.new('figure', out)
teaser_fig['id'] = 'teaser'
teaser_img.parent = teaser_fig
teaser_caption.parent = teaser_fig
teaser_fig.parent = article;

abstract.parent = article

sections.each do |s|
  unless s['class'].include? 'ltx_glossary'
    s.parent = article
  end
end

# Add IDs for TOC
article.css('section').each do |s|
  s.first_element_child['id'] = 'H-' + s['id']
end

article.at_css('.ltx_title_acknowledgements')['id'] = 'H-ack'

# Clean up Bib
article.css('li.ltx_bibitem').each do |li|
  li.css('.isbn').each {|e| e.unlink }
  li.css('a[href="https://dx.doi.org/"]').each {|e| e.unlink }

  cited_by = li.at_css('span.ltx_bib_cited')
  span = cited_by.previous_element

  # Remove "External Links" text
  span.inner_html = span.inner_html.sub('External Links: ', '')
    

  # Remove URL Notes
  # Remove empty Document links
end

lines = HtmlBeautifier.beautify(out.to_html).split("\n")
html = lines.slice(1, lines.length).join("\n")
File.write(md, html, File.size(md), mode: 'a')

slug = File.basename(md, '.md')
FileUtils.mkdir_p("pubs/#{slug}")
FileUtils.mv(Dir.glob('scripts/out/*.png'), "pubs/#{slug}/", :verbose => true)
