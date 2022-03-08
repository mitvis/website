---
layout: page
home: true
---
<p id="mission">
  We use visualization as a petri dish 
  to study <strong>intelligence augmentation</strong>: 
  how can computation help amplify our cognition and creativity, 
  while respecting our agency?
</p>

<div id="home" class="pure-g">
  <div id="themes" class="pure-u-1 pure-u-md-3-5">
    <h2>Research Themes</h2>
    {% for theme in site.data.research_themes %}
      <div id="theme-{{theme.key}}" class="theme" data-url="{{theme.url}}" data-people="{{theme.people}}">
        <video muted loop playsinline>
          <source src="/videos/themes/{{theme.key}}.mp4" type="video/mp4">
        </video>
        <div class="content">
          <h3>{{theme.name}}</h3>
          {{theme.desc | markdownify}}
        </div>
      </div>
    {% endfor %}
  </div>

  <div class="pure-u-1 pure-u-md-2-5">
    <h2 id="news-header">News</h2>
    <div id="news">
      <div id="news-items">
        {% for item in site.data.news limit: 10 %}
          <div class="item">
            <p class="date">{{item.date}}</p>
            {{item.desc | markdownify}}
          </div>
        {% endfor %}
      </div>
    </div>

    <h2 id="people-header">People</h2>
    <div id="people" class="pure-g">
      {% assign members = site.data.people | filter_alumni: nil | sort_people %}
      {% for person in members %}
        <div id="{{person[0]}}" class="person pure-u-1-4">
          <a href="{{person[1].url}}">
            <p class="headshot"><img src="/imgs/people/{{person[0]}}.jpg" alt="" /></p>
            <p class="name">{{person[1].name}}</p>
            <p class="title">{{person[1].title}}</p>
          </a>
        </div>
      {% endfor %}
    </div>

    <h3 id="alumni-header">Alumni</h3>
    <ul id="alumni" class="pure-g">
      {% assign alumni = site.data.people | filter_alumni: true | sort_people %}
      {% for person in alumni  %}
        <li id="{{person[0]}}" class="person pure-u-1-2">
          <a href="{{person[1].url}}">
            <span class="headshot">
              <img src="/imgs/people/{{person[0]}}.jpg" alt="" />
            </span>
            <span>
              <span class="name">{{person[1].name}}</span><br> 
              <span class="title">{{person[1].title}}</span>
            </span>
          </a>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>
