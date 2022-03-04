---
layout: page
home:  true
---
<div id="home" class="pure-g">
  <div id="themes" class="pure-u-1 pure-u-md-3-5">
    <h2>Research Themes</h2>
  </div>

  <div class="pure-u-1 pure-u-md-2-5">
    <h2 id="news-header">News</h2>
    <div id="news">
      <div id="news-items">
        {% for item in site.data.news %}
          <div class="item">
            <p class="date">{{item.date}}</p>
            <p>{{item.desc}}</p>
          </div>
        {% endfor %}
      </div>
    </div>

    <h2 id="members-header">People</h2>
    <div id="members" class="pure-g">
      {% for member in site.data.members %}
        {% if member[1].alumni != true %}
          <div class="member pure-u-1-4">
            <a href="{{member[1].url}}">
              <p class="headshot"><img src="/imgs/people/{{member[0]}}.jpg" alt="" /></p>
              <p class="name">{{member[1].name}}</p>
              <p class="title">{{member[1].title}}</p>
            </a>
          </div>
        {% endif %}
      {% endfor %}
    </div>

    <h3 id="alumni-header">Alumni</h3>
    <ul id="alumni">
      {% for member in site.data.members %}
        {% if member[1].alumni == true %}
          <li>
            <a href="{{member[1].url}}">
              <span class="headshot">
                <img src="/imgs/people/{{member[0]}}.jpg" alt="" />
              </span>
              <span>
                <span class="name">{{member[1].name}}</span>, 
                <span class="title">{{member[1].title}}</span>
              </span>
            </a>
          </li>
        {% endif %}
      {% endfor %}
    </ul>
  </div>
</div>
