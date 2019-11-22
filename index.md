

<html lang="en">

<head>
<title>Interactive ICARUS</title>
<meta charset="utf-8" name="viewport" content="width-device-width initial-scale-1"/>


<!-- JavaScript required libraries -->
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="http://d3js.org/topojson.v0.min.js"></script>

<!-- Bootstrap & jQuery -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

<!-- Loading Screen Script -->
<script type="text/javascript">

$(document).ready(function(){
var counter = 0;
var a = setInterval(function(){

//document.getElementById("count").textContent = a;

counter++;

if(counter == 101){
clearInterval(a);
$(".loadingFrame").css("display", "none");
$(".page").css("display", "block");
}

}, 5);
});

</script>

<!-- Own stylesheet -->
<link rel="stylesheet" href="styles.css"/>

<!-- Fonts -->
<link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
</head>
<body>

<div class="loadingFrame col-lg-12 col-sm-12">
<div class="loading col-lg-12 col-sm-12">
<h1 class="blinker col-lg-12 col-sm-12">LOADING...</h1>
</div>
</div>

<div class="page" style="display: none">
<div id="section1" class="card">
<div class="row">
<div id="sitename" class="col-sm-12 col-md-12 col-lg-9">
<h1>ICARUS</h1>
<h3 style="color:turquoise">(Image Classification Algorithm for Road Utility Status)</h3>
</div>
</div>
<div class="row">
<div class="map-container col-sm-12 col-md-12 col-lg-9">
<div id="map" class="col-sm-12 col-md-12 col-lg-12">
</div>
</div>
<div id="sidebar" class="col-sm-12 col-md-12 col-lg-3">
<h2>DESCRIPTION</h2>

<p class="description"> This Map shows results aquired using <a href="https://github.com/taetscher/ICARUS" target="_blank">ICARUS</a>. It is currently a work in progress, hence why the zooming and panning action is still laggy as it can be. Also, please keep in mind that on this map, all of the predictions are shown - while you really can't take any prediction below a confidence of 0.85 too seriously.<br/><br/>

ICARUS is an image classification algorithm which detects asphalt roads in images. Please read a more detailed description over at <a href="https://taetscher.github.io/ICARUS/" target="_blank">ICARUS' standalone website</a>. <br/><br/>

Also, feel free to read my Master's Thesis (once it's finished and online I will link it here).<br/><br/>

For more about sources of the data used here, or contact information about myself, scroll down.

</p>


</div>
</div>
</div>

<div id="section3" class="container-fluid">
<div class="row">
<div class="col-sm-12 col-md-12 col-lg-6">
<h3>ABOUT THE DATA</h3>

<p> The data used to generate this map comes from:<br/><br/>


Outputs of <a href="https://github.com/taetscher/ICARUS" target="_blank">ICARUS</a> (prediction confidence) <br/><br/>

<a href="https://twitter.com/home?lang=de" target="_blank">Twitter</a> (all of the images that are loaded)<br/><br/>

<a href="https://ec.europa.eu/eurostat/de/web/gisco/geodata/reference-data/administrative-units-statistical-units/countries#countries16" target="_blank">EUROSTAT</a> (map base layer)<br/><br/> 

</p>



</div>

<div class="col-sm-12 col-md-12 col-lg-1"></div>

<div class="col-sm-12 col-md-12 col-lg-5">
<h3>ABOUT THE AUTHOR</h3>
<div class="row col-sm-12 col-md-12 col-lg-12">
<div class="row col-sm-6 col-md-6 col-lg-12 author">

<div class="col-sm-12 col-md-12 col-lg-4">
<div class="image-container">
    <img src="dr-eint.png" width=130 height=130 alt="Nothing to see here!"/>
</div>   
</div>
<div class="col-sm-12 col-md-12 col-lg-8">
<h6 class="name">BENJAMIN SCHUEPBACH</h6>
<p>Benjamin is doing a Master's degree in Geography at the University of Bern, Switzerland. His other interests mainly consist of handball and quality banter. He has been to India once.</p>
<p>Coding Languages: mainly Python. <br><a href="mailto:benjamin.schuepbach@students.unibe.ch">Contact me here!</a><br><a href="https://github.com/taetscher" target="_blank">Follow me on GitHub!</a></p>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="impressum col-sm-12 col-md-12 col-lg-12">
<p><strong>Impressum</strong> <br>
This work is licenced under <a href="https://www.gnu.org/licenses/gpl-3.0.de.html" target="_blank">GNU GENERAL PUBLIC LICENSE
Version 3, 29 June 2007</a>.<br>Last Revision: 21.11.2019, 16:41</p>
</div>

</div>

<!-- Script for Visualization-App -->
<script src="visualization.js"></script>

<script type="text/javascript">
/* 

The authors of this program are:
-Benjamin Schüpbach

Last update: 24.05.2019

Licence: CC-BY-SA
https://creativecommons.org/licenses/by-sa/4.0/

*/


//----------------------TOOLTIP--------------------------
// Tooltip
// create a tooltip
var Tooltip = d3.select("#map")
.append("div")
.attr("class", "tooltip")
.attr("position", "fixed")
.style("opacity", 0)
//.attr("display", "none")
.style("background-color", "#3f3d3d")
.style("border", "solid")
.style("color", "whitesmoke")
.style("border-width", "2px")
.style("border-radius", "5px")
.style("padding", "5px")

// Three function that change the tooltip when user hover / move / leave a cell
var mouseover = function(d) {
Tooltip.style("border-color", d3.select(this).attr("stroke"))
//.attr("display", "inline")
.style("left", (d3.event.pageX + 10) + "px")
.style("top", (d3.event.pageY - 100) + "px")
.style("opacity", 1)

/*.style("left", (d3.mouse(this)[0]) + "px")
.style("top", (d3.mouse(this)[1]) + "px");*/

var featureClass = d3.select(this).attr("class");

// if mouse hovers over point, show image from url


if ( featureClass == "point"){
Tooltip.html("<img src=" +  d.url  + " width='200' height='auto' />" + "<br/>Prediction Confidence: " + parseFloat(d.avr_prediction_conf).toFixed(2))
console.log("MOUSEOVER", " ,URL: " + d.url)
}}





var mousemove = function(d) {
Tooltip.style("opacity", 1)
}
var mouseleave = function(d) {
//Tooltip function
Tooltip.style("opacity", 0)

}



//----------------------MAPPING--------------------------

var svg = d3.select("#map").append("svg")
.attr("preserveAspectRatio", "xMinYMin meet")
.attr("viewBox", "0 0 1000 650");

var projection = d3.geo.mercator();

var path = d3.geo.path()
.projection(projection);

var g = svg.append("g");

var infile1 = "geodata/ref-countries-2016-60m.json/CNTR_BN_60M_2016_4326.json"

var icarusOut = "geodata/icarus_output.csv"




//create the background map
d3.json(infile1, function(topology) {

g.selectAll("path")
.data(topojson.object(topology, topology.objects.CNTR_BN_60M_2016_4326).geometries)
.enter()
.append("path")
.attr("d", path)
});


// read in ICARUS output
d3.csv(icarusOut, function(csvData){

console.log(csvData);


g.selectAll("circle")
.data(csvData)
.enter()
.append("circle")
// project points onto the map
.attr("transform", function(d) {
return "translate(" + projection([(d.lon),(d.lat)]) + ")";
})
.attr("stroke", "turquoise")
.attr("stroke-width", 0.5)
.attr("r", 1)
.attr("class", "point")
.on("mouseover", mouseover)
.on("mousemove", mousemove)
.on("mouseleave", mouseleave);




});

// zooming behavior
var zoom = d3.behavior.zoom()
.on("zoom",function() {
g.attr("transform","translate("+ 
d3.event.translate.join(",")+")scale("+d3.event.scale+")");
g.selectAll("circle")
.attr("d", path.projection(projection));
g.selectAll("path")  
.attr("d", path.projection(projection)); 

});

svg.call(zoom)



    
</script>

</body>
</html>