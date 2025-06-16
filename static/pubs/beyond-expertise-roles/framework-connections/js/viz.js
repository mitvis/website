console.log("here")

const WIDTH = 1100
const HEIGHT = 400
const LABELHEIGHT = 30
const margin = {left: 20, right: 300, top: 20, bottom: 20}

var categories = ['knowledge', 'goals', 'objectives', 'tasks']
var categoryLabels = ['knowledge-contexts', 'goals', 'objectives', 'tasks']
var knowledge = ['ML-Formal', 'ML-Instrumental', 'ML-Personal', 'Domain-Formal',
			       'Domain-Instrumental', 'Domain-Personal', 'Milieu-Formal',
			       'Milieu-Instrumental', 'Milieu-Personal', 'Stakeholders-Not-Specified']
var goals = ['G1', 'G2', 'Goal-Not-Specified']
var objectives = [ 'O1', 'O2', 'O3',
       			   'O4', 'O5', 'O6', 'O7', 'Obj-Not-Specified']
var tasks = ['T1', 'T2', 'T3', 'T4', 'T5']

var labels = {
	'Stakeholders-Not-Specified': 'knowledge code undetermined',
	'G1': 'G1: understanding', 
	'G2': 'G2: trust',
	'Goal-Not-Specified': 'goal code undetermined',
	'O4': 'O4: justify actions based on output',
	'O3': 'O3: understand how to incorporate output', 
	'O1': 'O1: debug or improve',
	'O7': 'O7: contest decision',
	'O2': 'O2: compliance w/ regulations',
	'O5': 'O5: understand data usage',
	'Obj-Not-Specified': 'obj. code undetermined',
	'O6': 'O6: learn about domain',
	'T1': 'T1: assess prediction reliability', 
	'T2': 'T2: detect discrimination/mistake',
	'T5': 'T5: understand model strengths/limitations',
	'T3': 'T3: understand features used',
	'T4': 'T4: understand influence of features'
}

var colors = [
	'lightgreen', 
	'lightblue',
	'lightpink'
]

var rowColors = [
	'#F0F0F0',
	'#E0E0E0'
]

var titleDiv = d3.select(".wrapper")
				  .append("div")
				  .attr("class", "titleDiv")
				  .attr("width", WIDTH + "px")
				  .attr("height", LABELHEIGHT + "px")


var labelSvg = d3.select(".wrapper")
    .append("svg")
    .attr("width", WIDTH + "px")
    .attr("height", LABELHEIGHT + "px");


var svg = d3.select(".wrapper")
    .append("svg")
    .attr("width", WIDTH + "px")
    .attr("height", HEIGHT + "px");

d3.select(".wrapper").append("div").attr("class", "checkboxDiv")
$(".checkboxDiv").html(`
	<input type="checkbox" id="showAllNodes" name="showAllNodes"
         checked>
  	<label for="showAllNodes">show connections to/from other nodes in same level on hover</label>
`)

$("#showAllNodes").change(function() {
    if(this.checked) {
        $(".checkboxDiv label").css("opacity", 1)
    } else {
    	$(".checkboxDiv label").css("opacity", 0.5)
    }
});

var papersDiv = d3.select(".wrapper")
				  .append("div")
				  .attr("class", "papersList")
				  .attr("width", WIDTH + "px")

var lineOrigOpacity = 0.1
var circleOrigOpacity = 0.6
var textOrigOpacity = 0.8

var circleHeight = 4
var categoryScale = d3.scalePoint(categories, [margin.left, WIDTH - margin.right])
var knowledgeScale = d3.scalePoint(knowledge, [margin.top, HEIGHT - margin.bottom])
var goalsScale = d3.scalePoint(goals, [margin.top, HEIGHT - margin.bottom])
var objectivesScale = d3.scalePoint(objectives, [margin.top, HEIGHT - margin.bottom])
var tasksScale = d3.scalePoint(tasks, [margin.top, HEIGHT - margin.bottom])
var scaleDict = {
	'knowledge': knowledgeScale,
	'goals': goalsScale,
	'objectives': objectivesScale,
	'tasks': tasksScale
}

labelSvg.selectAll("text")
        .data(categoryLabels)
        .join("text")
        .attr("x", d => categoryScale(d))
        .attr("y", 20)
        .text(d => d)
        .style("font-family", "Open Sans")

$(".titleDiv").html(`
	<div class='title'>A Framework to Characterize the Stakeholders of Interpretable ML 
	and their Needs: Descriptive Power</div>
	<div class='subtitle'><i>about this figure</i></div>
`)

$(".modal-text").html(`
	<div class='aboutText'>
	<h3>About</h3>
	<p>This is an interactive figure that is part of the following paper:</p>
	<p style='color:grey;'>Suresh, Harini; Gomez, Steven R.; Nam, Kevin K.; Satyanarayan, Arvind. 2021. 
	Beyond Expertise and Roles: A Framework for Characterizing Stakeholders of Interpretable 
	Machine Learning and their Needs. In <i>Proceedings of CHI '21: ACM CHI Conference on Human 
	Factors In Computing Systems (CHI '21).</i><p>
	<p>Here, we combine the two halves of the framework (knowledge-contexts and goals-objectives-tasks),
	and show how our more granular and composable vocabulary is able to describe a set of 58 papers from the literature on ML 
	Interpretability (see section 4.1 for more details on this set of papers).</p>
	<p>Each paper was coded by at least two people, who used the framework to identify instances of 
	stakeholder knowledge types and contexts, as well as goals, objectives, and tasks. Where possible, 
	we collected snippets of the papers corresponding to a description or discussion of stakeholder.</p>
	<p>In the figure, light grey links represent the set of all 58 papers.  Links connect codes that appear
	in the same paper.  The width of the link corresponds to the number of papers that contain both those codes. 
	In some cases, we did not denote a code for a certain level because we did not notice it being 
	explicitly specified. In the figure, these cases contain links to/from the "code undetermined" node.
	</p>
	<p>When hovering over a specific code, a colored overlay of links appear representing the set of papers 
	that contain that code. Below, the papers and any corresponding snippets of that code appear.  To scroll through 
	and list of papers, click on the node and the paper list will remain up.</p>
	</div>

	<h3>Acknowledgements</h3>
	<p>This research was sponsored by NSF Award #1900991, and by the United States Air Force 
	Research Laboratory under Cooperative Agreement Number FA8750-19-2-1000. 
	The views and conclusions contained in this document are those of the authors and should 
	not be interpreted as representing the official policies, either expressed or implied, 
	of the United States Air Force or the U.S. Government. The U.S. Government is authorized to 
	reproduce and distribute reprints for Government purposes notwithstanding any copyright notation 
	herein.</p>
`)



// Get the modal
var modal = $("#myModal");

// Get the button that opens the modal
var btn = $(".subtitle");

// Get the <span> element that closes the modal
var span = $("#close");

// When the user clicks on the button, open the modal
btn.click(function() {
  modal.css("display", "block");
})

// When the user clicks on <span> (x), close the modal
span.click(function() {
  modal.css("display", "none");
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.css("display", "none");
  }
}


function aggregateLinks(linkData) {
	var helper = {};
	var aggLinks = linkData.reduce(function(r, o) {
  	  var key = o.source + '-' + o.target;
  
	  if(!helper[key]) {
	    helper[key] = Object.assign({}, o); // create a copy of o
	    helper[key]['count'] = 1
	    helper[key]['paper'] = [o.paper]
	    r.push(helper[key]);
	  } else {
	    helper[key].count += 1;
	    helper[key].level = o.level;
	    helper[key].paper.push(o.paper)
	  }

  	  return r;

	}, []);

	return aggLinks;
}

var links;
var nodes;
var clicked; 
d3.json("data/node_link_data.json").then(function(data) {
	console.log(data)

	nodes = data['nodes']
	links = data['links']
	var aggLinks = aggregateLinks(links)

    svg.append("g")
    .attr("class", "lines")
    .selectAll("line")
    .data(aggLinks)
    .join("line")
    .style("stroke", 'grey')
    .style("stroke-width", d => d.count)
    .style("opacity", lineOrigOpacity)
    .attr("source", d => d.source)
    .attr("target", d => d.target)
    .attr("x1", d => categoryScale(categories[d.level]))
    .attr("x2", d => categoryScale(categories[d.level + 1]))
    .attr("y1", function(d) {
    	var scale = scaleDict[categories[d.level]]
    	return scale(d.source)
    })
    .attr("y2", function(d) {
    	var scale = scaleDict[categories[d.level + 1]]
    	return scale(d.target)
    })
    .attr("paper-id", d => d.paper_list);

	svg.append("g")
		.attr("class", "selectedLines")

	svg.append("g")
    .selectAll("circle")
    .data(nodes)
    .join("circle")
      .attr("cx", d => categoryScale(d.category))
      .attr("cy", d => scaleDict[d.category](d.name))
      .attr("r", circleHeight)
      .attr("class", d => d.name)
      .attr("fill", "grey")
      .style("opacity", circleOrigOpacity)
      .style("z-index", 1001)
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)
      .on("click", handleClick)

    svg.selectAll("text")
      .data(nodes)
      .join("text")
      .attr("class", d => `label ${d.name}`)
      .attr("x", d => categoryScale(d.category))
      .attr("y", d => scaleDict[d.category](d.name))
      .attr("dx", "0.75em")
      .attr("dy", "0.33em")
      .style("font-size", 12)
      .style("opacity", textOrigOpacity)
      .style("z-index", 1000)
      .text(function(d) {
      	if (d.name in labels) {
      		return labels[d.name]
      	} else {
      		return d.name
      	}
      }).on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)
      .on("click", handleClick) 

    clicked = false;

    function handleClick(event, d) {
    	handleMouseOver(event, d)
    	clicked = true;
    }

	function handleMouseOver(event, d) {  // Add interactivity
	    // Use D3 to select element, change color and size
	    if (clicked) {
	    	clicked = false
	    	handleMouseOut(event, d)
	    }

	    $(".bibItem").remove()
	    $(".bibLabel").html("")
	    $(`.${d.name}`).css('opacity', 1)
	    $(`circle.${d.name}`).css('stroke', 'black')

	    var filteredData = links.filter(function(itm){
		  return d.paper_list.indexOf(itm.paper) > -1;
		});

	    if (!($('#showAllNodes').is(":checked"))) {
	    	filteredData = filteredData.filter(function(itm){
	    		var sourceCategory = categories[itm.level]
	    		var targetCategory = categories[itm.level + 1]
	    		if (sourceCategory == d.category) {
	    			return d.name == itm.source 
	    		} else if (targetCategory == d.category) {
	    			return d.name == itm.target
	    		} else {
	    			return true
	    		}
			});
	    }

	    var aggFilteredData = aggregateLinks(filteredData)
	    d3.select(".selectedLines")
		   .selectAll("line")
		   .data(aggFilteredData)
		   .join("line")
		   .style("stroke", d => colors[d.level])
		   .style("stroke-width", d => d.count)
		   .style("opacity", 1)
		   .attr("source", d => d.source)
		   .attr("target", d => d.target)
		   .attr("x1", d => categoryScale(categories[d.level]))
		   .attr("x2", d => categoryScale(categories[d.level + 1]))
		   .attr("y1", function(d) {
		    	var scale = scaleDict[categories[d.level]]
		    	return scale(d.source)
		   })
		   .attr("y2", function(d) {
		    	var scale = scaleDict[categories[d.level + 1]]
		    	return scale(d.target)
		   })

            var selectedPapers = bib.filter(function(item) {
            	return d.paper_list.indexOf(item.index) > -1 
            })

            var labelText = $(`text.${d['name']}`).text()
            $(".bibLabel").html(`for ${labelText}`)

			for (var b = 0; b < selectedPapers.length; b++) {
				var item = selectedPapers[b]
				var snippet = ""
				if (item['index'] in d['snippets']) {
					snippet = d['snippets'][item['index']]
				}

				$(".papersListInner").append(
					`<div class='bibItem' style='background-color:${rowColors[(b%2)]}'>
						<div class='citation'>
						[${item['index']}] ${item['author']} (${item['year']}). ${item['title']}.
						</div>
						<div class='snippet'>
						${snippet}
						</div>
					</div>`
				)
			}

	}

	function handleMouseOut(event, d) {
		if (clicked) {return;}
		$("circle").css("opacity", circleOrigOpacity).css('stroke', 'none')
		$(".label").css("opacity", textOrigOpacity)
		$(".bibItem").remove()
		$(".bibLabel").html("")
		d3.select(".selectedLines").selectAll("line").remove()
	}

})

$(".papersList").append(
	"<div style='font-family: Open Sans;'>papers & snippets</div>")
$(".papersList").append("<div class='bibLabel'></div>")
$(".papersList").append("<div class='papersListInner'></div>")

for (var b = 0; b < bib.length; b++) {
	var item = bib[b]
	$(".papersListInner").append(
		`<div class='bibItem'>
			<div class='citation'>
			[${b}] ${item['author']} (${item['year']}). ${item['title']}.
			</div>
			<div class='snippet'></div>
		</div>`
	)
}

$(".citation").css("opacity", 0.5)

