module Jekyll
    class UnderscoreGenerator < Generator
        safe true
        priority :low
  
        def generate(site)
          site.collections['pubs'].docs.each do |doc|
            doc.data['slug'] = doc.data['slug'].gsub('-', '_')
            doc.data['permalink'] = "/pubs/#{doc.data['slug']}/"
          end
        end
    end
end