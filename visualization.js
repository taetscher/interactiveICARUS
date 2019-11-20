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

var width = 6000;
var height = 2200;
var canvas = d3.select("#map")
                .append("svg");

var Points = canvas.append("g")
                    .attr("class", "Points")

var Countries = canvas.append("g")
                    .attr("class", "Countries")


// File-Paths
var pointData = "geodata/test.csv";
var countries = "geodata/ref-countries-2016-10m.json/CNTR_BN_10M_2016_3035.json"




// Define Projection and Path
var projection = d3.geoMercator()
        .scale([width*(2*Math.PI)])
        .translate([width/2,height/2]);
                
var path = d3.geo.path().projection(projection);


/* ---------------------- Layer Initialization --------------- */


//countries

d3.json(countries, function(data){
    console.log(data);
    console.log(data.arcs);
    
    Countries.selectAll("path")
            .data(topojson.feature(data, data.objects.CNTR_BN_10M_2016_3035).features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("color", "white")

});


