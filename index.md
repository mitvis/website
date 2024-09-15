---
layout: page
home: true
---
<p id="mission">
  We develop <strong>scalable and self-improving AI systems and methodologies towards the goal of AGI</strong>, leveraging techniques in machine learning, systems, natural language processing, and beyond.
</p>

<p id="ad">
    <h2><strong><b>Prospective Students and Postdocs:</b></strong></h2>
    <ul>
      <li>For students interested in working in the lab, please fill out <a href="https://docs.google.com/forms/d/e/1FAIpQLSemsYIAG1wUpGgclG1eaQxDNYxPHB5VZzLl9eRRFsT6NPa_0A/viewform">the following form</a>.</li>
      <li>If you are a prospective PhD student: please indicate your interest in working with Prof. Mirhoseini in the Stanford CS PhD online application form, as well as in your research statement. We admit new PhD students each year. Please do not contact us directly regarding PhD applications until admission decisions are out, as we will not be able to reply to emails from individual applicants.</li>
      <li>If you are a postdoc candidate: we currently have a joint postdoc position available. For information on how to apply, please visit <a href="https://docs.google.com/document/d/1SBfvFhLF4hSseTBybXRKJeRFMxqw4ahQ9f4Cf5Vbl7I/edit#heading=h.v7myj1tz6zo">here</a>.</li>
    </ul>
  </p>

<div id="home" class="pure-g">
  <div id="themes" class="pure-u-1 pure-u-md-3-5">
    <h2>Research Themes</h2>
    {% for theme in site.data.research_themes %}
      <div id="theme-{{theme.key}}" class="theme" data-url="{{theme.url}}" data-people="{{theme.people}}">
        <!-- <img src="/themes/{{theme.key}}.png" style="max-width: 100%; height: auto; display: block; margin-top: 0;"> -->
          <div style="padding-top: 0px; border-radius: 5px; margin-bottom: 0px;">
            <div class="content">
              <h3>{{theme.name}}</h3>
              {{theme.desc | markdownify}}
            </div>
          </div>
      </div>
    {% endfor %}
  </div>

  <div class="pure-u-1 pure-u-md-2-5">

    <div id="pinned">
      {% assign pinned = site.data.news | where: "pinned", true %}
      {{pinned[0].desc | markdownify}}
    </div>

    <h2 id="people-header">People</h2>
    <div id="people" class="pure-g">
      {% assign members = site.data.people | filter_alumni: nil | sort_people: 'Professor, PhD, Visiting, Undergraduate Student', false %}
      {% for person in members %}
        {% unless person[1].not_current %}
          <div id="{{person[0]}}" class="person pure-u-1-4">
            <a href="{{person[1].url}}">
              <p class="headshot"><img src="/imgs/people/{{person[0]}}.jpg" alt="" /></p>
              <p class="name">{{person[1].name}}</p>
              <p class="title">{{person[1].title}}</p>
            </a>
          </div>
        {% endunless %}
      {% endfor %}
    </div>
    <!-- <h3 id="alumni-header">Alumni</h3>
    <ul id="alumni" class="pure-g">
      {% assign alumni = site.data.people | filter_alumni: true | sort_people: 'PhD, Postdoctoral, Scientist' %}
      {% for person in alumni  %}
        <li id="{{person[0]}}" class="person pure-u-1-2">
          <a href="{{person[1].url}}">
            <span class="headshot">
              <img src="/imgs/people/{{person[0]}}.jpg" alt="" />
            </span>
            <span>
              <span class="name">{{person[1].name}}</span><br> 
              <span class="title">
                {{person[1].title}}
                {% if person[1].next %}
                  <br>
                  &rdca; {{person[1].next}}
                {% endif %}
              </span>              
            </span>
          </a>
        </li>
      {% endfor %}
    </ul> -->
  </div>
</div>

<div>
  <h5>Design from <a href="https://vis.csail.mit.edu/">MIT Visualization Group</a></h5>
</div>
