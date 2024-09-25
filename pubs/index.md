---
title: Publications
layout: page
---
<div id="pubs" class="pure-g">
  <div id="content" class="pure-u-1 pure-u-md-3-4">
    <h1 class="title">All Publications</h1>

    {% assign pubYears = site.pubs | group_by:"year" | sort: "name" | reverse %}
    {% for year in pubYears %}
      {% if year.name >= "2024" %}
      <div id="year-{{year.name}}" class="year pure-g">
        <div class="pure-u-1-3 pure-u-md-1-5"></div>
        <div class="pure-u-2-3 pure-u-md-4-5">
          <h2>{{year.name}}</h2>
        </div>
      </div>
      {% endif %}
        {% assign pubs = year.items | sort: 'day' | reverse %}
        {% for pub in pubs %}
        {% unless pub.tags contains "highlight" %}
        {% assign url = pub.external_url | default: pub.url | relative_url | replace: 'index.html', '' %}
        <div id="{{pub.slug}}" class="pub pure-g" data-pub='{{ pub | jsonify_pub }}'>
          <div class="thumbnail pure-u-1-3 pure-u-md-1-5">
            <a href="{{url}}">
              <img src="/imgs/thumbs/{{pub.slug}}.png" alt="" />
            </a>
          </div>

          <div class="pure-u-2-3 pure-u-md-4-5">
            <h3><a href="{{url}}">{{pub.title}}</a></h3>
            <p class="authors">
            {% for author in pub.authors %}
              {% assign person = site.data.people[author.key] %}
              {% assign name = author.name | default:person.name %}
              {% if person.url %}
                <a href="{{person.url}}">{{name}}</a>{% if author.equal %}*{% endif %}{% unless forloop.last %}, {% endunless %}
              {% else %}
                {{name}}{% if author.equal %}*{% endif %}{% unless forloop.last %}, {% endunless %}
              {% endif %}
            {% endfor %}
            </p>
            <p class="venue">
              {% if pub.preprint %}
                {{pub.preprint.server}}: {{pub.preprint.id}}
              {% else %}
                {{site.data.venues[pub.venue].full}}, {{pub.year}}
              {% endif %}
            </p>
            {% if pub.award %}
              <p class="award">
                <i class="fas fa-award"></i> {{pub.award}}
              </p>
            {% endif %}
            <p class="links">
              {% if pub.external_url %}
                <a href="{{pub.external_url}}">
                  {% if pub.preprint %}Preprint{% else %}Article{% endif %}
                </a>
              {% else %}
                <a href="/pubs/{{pub.slug}}.pdf">PDF</a>
              {% endif %}
              {% for material in pub.materials %}
                &middot; <a href="{{material.url}}">
                  {% if material.display_name %}
                    {{material.display_name}}
                  {% elsif material.type == "link" %}
                    Link
                  {% elsif material.type == "code" %}
                    Code
                  {% else %}
                    {{material.name}}
                  {% endif %}
                </a>
              {% endfor %}
            </p>
          </div>
        </div>
      {% endunless %}
      {% endfor %}
    {% endfor %}

    <h1 class="title">Selected Prior Publications</h1>
    <br>
    {% assign highlighted_pubs = site.pubs | where: 'tags', 'highlight' %}
    {% assign pubYears = highlighted_pubs | group_by:"year" | sort: "name" | reverse %}
    {% for year in pubYears %}
      

      {% assign pubs = year.items | sort: 'date' | reverse %}
      {% for pub in pubs %}
        {% if pub.tags contains 'highlight' %}
        {% assign url = pub.external_url | default: pub.url | relative_url | replace: 'index.html', '' %}
        <div id="{{pub.slug}}" class="pub pure-g" data-pub='{{ pub | jsonify_pub }}'>
          <div class="thumbnail pure-u-1-3 pure-u-md-1-5">
            <a href="{{url}}">
              <img src="/imgs/thumbs/{{pub.slug}}.png" alt="" />
            </a>
          </div>

          <div class="pure-u-2-3 pure-u-md-4-5">
            <h3><a href="{{url}}">{{pub.title}}</a></h3>
            <p class="authors">
            {% for author in pub.authors %}
              {% assign person = site.data.people[author.key] %}
              {% assign name = author.name | default:person.name %}
              {% if person.url %}
                <a href="{{person.url}}">{{name}}</a>{% if author.equal %}*{% endif %}{% unless forloop.last %}, {% endunless %}
              {% else %}
                {{name}}{% if author.equal %}*{% endif %}{% unless forloop.last %}, {% endunless %}
              {% endif %}
            {% endfor %}
            </p>
            <p class="venue">
              {% if pub.preprint %}
                {{pub.preprint.server}}: {{pub.preprint.id}}
              {% else %}
                {{site.data.venues[pub.venue].full}}, {{pub.year}}
              {% endif %}
            </p>
            {% if pub.award %}
              <p class="award">
                <i class="fas fa-award"></i> {{pub.award}}
              </p>
            {% endif %}
            <p class="links">
              {% if pub.external_url %}
                <a href="{{pub.external_url}}">
                  {% if pub.preprint %}Preprint{% else %}Article{% endif %}
                </a>
              {% else %}
                {% if pub.has_pdf %}
                  <a href="/pubs/{{ pub.slug }}.pdf">PDF</a> &middot;
                {% endif %}
              {% endif %}
              {% for material in pub.materials %}
                <a href="{{material.url}}">
                  {% if material.display_name %}
                    {{material.display_name}}
                  {% elsif material.type == "link" %}
                    Link
                  {% elsif material.type == "code" %}
                    Code
                  {% else %}
                    {{material.name}}
                  {% endif %}
                </a>
              {% endfor %}
            </p>
          </div>
        </div>
        {% endif %}
      {% endfor %}
    {% endfor %}
  </div> 
  
  <div id="sidebar" class="pure-u-1 pure-u-md-1-4">
    <h4>Search</h4>
    <input type="text" id="search" placeholder="Search title, abstract, or authors...">

    <h4>Publication Type</h4>
    <div id="types">
      {% assign types = site.pubs | map: 'type' | uniq %}
      {% for type in types %}
        <a id="type-{{type}}" class="tag" data-tag="{{type}}">{{type | capitalize}} <span>()</span></a>
      {% endfor %}
    </div>

    <h4>Tags</h4>
    <div id="tags">
      {% for group in site.data.tags %}
        <p>
          {% for tag in group %}
            <a id="tag-{{tag | replace: ' ', '-'}}" class="tag" data-tag="{{tag}}">
              {% assign words = tag | split: ' ' %}
              {% for word in words %}
                {% if word == 'human-ai' %}
                  Human-AI
                {% else %}
                  {{word | capitalize}}
                {% endif %}
              {% endfor %}
              <span>()</span>
            </a>
          {% endfor %}
        </p>
      {% endfor %}
    </div>
  </div>  
</div>
