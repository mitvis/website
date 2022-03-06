require 'nokogumbo'

module MITVisFilters
  def filter_alumni(input, flag)
    input.select{ |key, value| value['alumni'] == flag }
  end

  def sort_people(input)
    def filter(arr, flip = false)
      arr.select{ |key, value| 
        prof = value['title'].include? 'Professor'
        flip ? !prof : prof
      }
    end

    def namesort(arr)
      arr.sort{ |a, b| a[1]['name'].split(' ')[-1] <=> b[1]['name'].split(' ')[-1] }
    end

    faculty = namesort(filter(input))
    members = namesort(filter(input, true))
    faculty + members
  end

  def jsonify_pub(input)
    people = @context.registers[:site].data['people']
    pub = {
      'id': input['slug'],
      'title': input['title'], 
      'year': input['year'],
      'type': input['type'],
      'tags': input['tags'].map { |tag| tag.downcase},
      'authors': input['authors'].map { 
        |author| author['name'] || people[author['key']]['name'] 
      }
    }

    if input['stub'] then
      pub['caption'] = strip_html(input['teaser'])
      pub['abstract'] = strip_html(input['content'])
    else
      doc = Nokogiri::HTML5(input['content'])
      pub['caption'] = strip_html(doc.at_css('#teaser figcaption'))
      pub['abstract'] = strip_html(doc.at_css('#abstract p'))
    end
    escape(jsonify(pub))
  end
end

Liquid::Template.register_filter(MITVisFilters)
