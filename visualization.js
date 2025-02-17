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
    .style("opacity", 0)
    .style("background-color", "#3f3d3d")
    .style("border", "solid")
    .style("color", "whitesmoke")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")


// Three function that change the tooltip when user hover / move / leave a cell
var mouseover = function(d) {
    //use this to position the tooltip over the description field!
    console.log(d3.select(this).attr("cx"))
    console.log(d3.select(this).attr("cx"))
    
    console.log(d3.event.pageX)
    console.log(d3.event.pageY)
    
    var positions = projection([(d.lon),(d.lat)]);
    console.log(positions[0], positions[1])

    Tooltip.transition()    
            .duration(400)    
            .style("opacity", 1)
            .style("border-color", d3.select(this).attr("stroke"))
            .style("left", (d3.event.pageX-400) + "px")   
            .style("top", (d3.event.pageY-200) + "px");

        
      /*.style("left", (d3.mouse(this)[0]) + "px")
        .style("top", (d3.mouse(this)[1]) + "px");*/
    
        var featureClass = d3.select(this).attr("class");
        
        // if mouse hovers over point, show image from url
        
    
        if ( featureClass == "point"){
            Tooltip.html("<img src=" +  d.url  + " width='auto' height='300' />" + "<br/>Prediction Confidence: " + parseFloat(d.avr_prediction_conf).toFixed(2))
            console.log("MOUSEOVER", " ,URL: " + d.url)
        }}
        
    
    
    
    
var mousemove = function(d) {
    Tooltip.style("opacity", 1)
}
var mouseleave = function(d) {
    //Tooltip function
    Tooltip.transition()    
            .duration(500)    
            .style("opacity", 0);
    
    
    // also remove appended DIV!!!
    d3.select("tooltip").remove();
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

var icarusOut = "geodata/icarus_output_thresh09.csv"




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
        .attr("stroke", "#b5e853")
        .attr("stroke-width", 0.5)
        .attr("r", 1.1)
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
            .attr("d", path.projection(projection))
            .attr("r", .2+(1/d3.event.scale))
            .attr("stroke-width", .01+(1/d3.event.scale));
        g.selectAll("path")  
            .attr("d", path.projection(projection)); 
        
        
        console.log(d3.event.scale)

  });

svg.call(zoom)


