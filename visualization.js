/* This stylesheet was created within the Open Data Lecture 2019 at the Institute for digital sustainability (Digitale Nachhaltigkeit)
	at the University of Bern.
	
	The authors of this stylesheet are:
	-Benjamin Schüpbach
	-Christoph von Matt
	
	Last update: 24.05.2019
	
	Licence: CC-BY-SA
	https://creativecommons.org/licenses/by-sa/4.0/

*/
/* ---------------------- Settings ------------------------ */
// Set up canvas and Layer-Groups





var svg = d3.select("#map").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 1000 650");

var projection = d3.geo.mercator().scale(100)
        .translate([500,325]);

var path = d3.geo.path()
  .projection(projection);

var g = svg.append("g");

var infile1 = "geodata/ref-countries-2016-60m.json/CNTR_BN_60M_2016_4326.json"



d3.json(infile1, function(error, topology) {
    
    console.log(topology)

g.selectAll("path")
    .data(topojson.object(topology, topology.objects.CNTR_BN_60M_2016_4326).geometries)
    .enter()
    .append("path")
    .attr("d", path)
    .attr("color", "white")
});


var zoom = d3.behavior.zoom()
    .on("zoom",function() {
        g.attr("transform","translate("+ 
            d3.event.translate.join(",")+")scale("+d3.event.scale+")");
        //g.selectAll("circle")
            //.attr("d", path.projection(projection));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 

  });

svg.call(zoom)


