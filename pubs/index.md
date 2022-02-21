---
title: Publications
layout: page
---
<div id="pubs" class="pure-u-1">
  <div id="content" class="pure-u-1 pure-u-md-3-4">
    <h1 class="title">Our Publications</h1>

    {% assign pubYears = site.pubs | group_by:"year" | sort: "name" | reverse %}
    {% for year in pubYears %}
      <div class="pure-g">
        <div class="pure-u-1-2 pure-u-md-1-5"></div>
        <div class="pure-u-1-2 pure-u-md-4-5">
          <h2>{{year.name}}</h2>
        </div>
      </div>

      {% for pub in year.items %}
        {% assign url = pub.external_url | default: pub.url | relative_url | replace: 'index.html', '' %}
        <div class="paper pure-g">
          <div class="thumbnail pure-u-1-2 pure-u-md-1-5">
            <a href="{{url}}">
              <img src="/imgs/thumbs/{{pub.slug}}.png" alt="" />
            </a>
          </div>

          <div class="pure-u-1-2 pure-u-md-4-5">
            <h3><a href="{{url}}">{{pub.title}}</a></h3>
            <p class="authors">
            {% for author in pub.authors %}
              {% assign member = site.data.members[author.key] %}
              {% if member.url %}
                <a href="{{member.url}}">{{member.name}}</a>{% unless forloop.last %}, {% endunless %}
              {% else %}
                {{author.name}}{% unless forloop.last %}, {% endunless %}
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
            {% if pub.bestPaper %}
              <p class="award">
                <i class="fas fa-trophy"></i> Best Paper Award
              </p>
            {% elsif pub.honMention %}
              <p class="award">
                <i class="fas fa-award"></i> Best Paper Nominee
              </p>
            {% endif %}
            <p class="links">
              {% if pub.external_url %}
                <a href="{{pub.external_url}}">Article</a>
              {% else %}
                <a href="/pubs/{{pub.slug}}.pdf">PDF</a>
              {% endif %}
              {% for material in pub.materials %}
                &middot; <a href="{{material.url}}">{{material.name}}</a> 
              {% endfor %}
            </p>
          </div>
        </div>
      {% endfor %}
    {% endfor %}
  </div> 
  
  <div id="sidebar" class="pure-u-1 pure-u-md-1-4">

  </div>  
</div>
