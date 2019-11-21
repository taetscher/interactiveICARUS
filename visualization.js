/* 
	
	The authors of this program are:
	-Benjamin Schüpbach
	
	Last update: 24.05.2019
	
	Licence: CC-BY-SA
	https://creativecommons.org/licenses/by-sa/4.0/

*/
/* ---------------------- Settings ------------------------ */
// Set up canvas and Layer-Groups





var svg = d3.select("#map").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 500 500");

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
        .attr("stroke", "red")
        .attr("r", 1)


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


