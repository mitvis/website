module Jekyll
  class BibTexTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      @text = text
    end

    # Lookup allows access to the page/post variables through the tag context
    def lookup(context, name)
      lookup = context
      name.split(".").each { |value| lookup = lookup[value] }
      lookup
    end

    def bibtex_escape(str)
      str.gsub('&', '\\\\&')
        .sub('%', '\\\\%')
        .sub("é", "\\\\'{e}")
        .sub("Ç", "\\\\c{C}")
        .sub("ğ", "\\\\u{g}")
    end

    def render(context)
      # Site
      venues = lookup(context, 'site.data.venues')
      people = lookup(context, 'site.data.people')

      # Page
      authors = lookup(context, 'page.authors')
      venue = lookup(context, 'page.venue')
      year = lookup(context, 'page.year')
      slug = lookup(context, 'page.slug')
      title = lookup(context, 'page.title')
      doi = lookup(context, 'page.doi')

      bibtex = venues[venue]['bibtex']

      author_str = authors.map{|a| a['name'] || people[a['key']]['name']}.join(' and ')
      doi_str = doi ? "\n  doi = {#{doi}}," : ''
      url_str = doi ? "\n  url = {https://arxiv.org/abs/#{doi.split('arXiv.').last}}," : ''

      "@#{bibtex['type']}{#{year}#{slug.gsub(/[_-]/, '')},
  title = {#{title}},
  author = {#{author_str}},
  #{bibtex['venue']} = {#{bibtex_escape(venues[venue]['full'])}},
  year = {#{year}},#{doi_str}#{url_str}
}"
    end
  end
end

Liquid::Template.register_tag('bibtex', Jekyll::BibTexTag)
