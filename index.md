    
<html lang="en">
    <head>
        <title>Interactive ICARUS</title>
        <meta charset="utf-8" name="viewport" content="width-device-width initial-scale-1"/>
        <!-- JavaScript required libraries -->
        <script src="https://d3js.org/d3.v3.min.js"></script>
        <script src="https://d3js.org/topojson.v0.min.js"></script>
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
                    <div id="sitename" class="col-sm-12 col-md-12 col-lg-12">
                        <h1>ICARUS</h1>
                        <h3 style="color:#b5e853">(Image Classification Algorithm for Road Utility Status)</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="map-container col-sm-12 col-md-12 col-lg-12">
                        <div id="map" class="col-sm-12 col-md-12 col-lg-12">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div id="sidebar" class="col-sm-12 col-md-12 col-lg-12">
                        <br/>
                        <h2 style="color:deeppink">DESCRIPTION</h2>
                                <p class="description"> This Map shows results aquired using <a href="https://github.com/taetscher/ICARUS" target="_blank">ICARUS</a>. ICARUS is an image classification algorithm which detects asphalt roads in images.<br/><br/>You can use your mouse to zoom (mousewheel), pan (click &amp; drag) and hover over the points on the map (which will show you the prediction confidence of ICARUS for each image, as well as the actual image it used to make the prediction). On this map, only predictions above confidence 0.9 are shown - for ICARUS is sometimes still more interested in ceramics, cats or other non-road-things. Also, the tooltip sometimes is a bit finnicky, if it stops behaving properly just reload the page please. This page is best displayed on a desktop PC in a Google Chrome browser.<br/><br/>
                                Please read a more detailed description over at <a href="https://taetscher.github.io/ICARUS/" target="_blank">ICARUS' standalone website</a>. <br/><br/>
                                Also, feel free to read my <a href="https://github.com/taetscher/MastersThesis/blob/master/BIGGER_IS_BETTER__OR_IS_IT_MastersThesisBS14100564.pdf" target="_blank">Master's Thesis</a>, for which ICARUS was used.<br/><br/>
                                For more about sources of the data used here, or contact information about myself, scroll down.
                            </p>
                    </div>
                </div>
            </div>
            <div id="section4" class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-12">
                        <br/>
                        <h2 style="color:deeppink">ABSTRACT</h2>
                        <p class="description"> With the emergence of the Internet of Things (IoT) and the extensive amount of
                            data produced by it, science's desire to investigate this vast amount of untapped
                            data is growing, resulting in the paradigm of big data: data sets of exceedingly large
                            volumes, growing at exceptional rates, consisting of enormous amounts of structured
                            and unstructured data. At the same time, artifcial intelligence (AI) techniques
                            needed to analyze data sets of these proportions continue to improve.<br/><br/>
                            The potentials attributed to big data analyses are extensive, particularly in the
                            context of efficiently generating reliable, up-to-date data to measure progress towards
                            the Agenda 2030's Sustainable Development Goals (SDGs). However, many scientific
                            contributions in this domain, focusing on unexploited capacities, rely on future
                            technological progress and therefore project prospective potentials. Yet, the SDGs
                            were designed to tackle current global challenges.<br/><br/>
                            For some of the indicators of sustainability introduced with the SDGs, it is still
                            unclear how reliable data can efficiently be generated. Therefore, this study examines
                            current technological capabilities and their potential contribution to overcoming a
                            lack of data. It does so with an example of a big data analysis: applying an image
                            classification algorithm (deep neural network) to geolocated media content posted to
                            Twitter, in order to both illustrate the current potentials of such an approach, as well
                            as challenges left to overcome if big data is to be used to generate useful information
                            for measuring progress towards the SDGs.<br/><br/>
                            The findings of this study show that current technological capabilities already
                            facilitate real-time analyses of big data from social media on a global scale. Yet, biases
                            within the data, resulting from uncertainties regarding the accuracy of geolocated
                            social media posts, along with low internet penetration rates and a consequent lack
                            of data - coupled with an unavailability of data from prime sources like Facebook
                            and Instagram - render such analyses incomplete, thus diminishing the significance of
                            information gained this way.<br/><br/>
                            Better access to more data from diverse sources is needed to improve on our
                            current capacities to generate reliable data to monitor progress towards improving
                            sustainability. However, especially analyses of data from social media are embedded in
                            a debate over privacy and data protection. This debate is here to stay. Nevertheless,
                            some of the reservations against artificial intelligence and big data analyses can be
                            alleviated by a high degree of transparency (i.e. by making big data projects open
                            source).</p>
                    </div>
                </div>
            </div>    
            <div id="section3" class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <h3>ABOUT THE DATA</h3>
                        <p align="center"> The data used to generate this map comes from:<br/><br/>
                            Outputs of <a href="https://github.com/taetscher/ICARUS" target="_blank">ICARUS</a> (predictions) <br/><br/>
                            <a href="https://twitter.com/home?lang=de" target="_blank">Twitter</a> (all of the images that are loaded)<br/><br/>
                            <a href="https://ec.europa.eu/eurostat/de/web/gisco/geodata/reference-data/administrative-units-statistical-units/countries#countries16" target="_blank">EUROSTAT</a> (map base layer)<br/><br/> 
                        </p>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-6">
                        <h3>ABOUT THE AUTHOR</h3>
                        <div class="row col-sm-12 col-md-12 col-lg-12">
                            <div class="row col-sm-6 col-md-6 col-lg-12 author">
                                <div class="col-sm-12 col-md-12 col-lg-4">
                                    <div class="image-container">
                                        <img src="dr_eint.png" width="130px" height="130px"/>
                                    </div>   
                                </div>
                                <div class="col-sm-12 col-md-12 col-lg-8">
                                    <h6 class="name">BENJAMIN SCHUEPBACH</h6>
                                    <p><a href="https://www.linkedin.com/in/benjamin-sch%C3%BCpbach-0a1b15129/" target="_blank">Benjamin</a> is currently pursuing a Master's degree in Geography at the University of Bern, Switzerland. His other interests mainly consist of handball and quality banter. He has been to India once.</p>
                                    <p>Coding Languages: mainly Python. <br><a href="mailto:beni.schuepbach@hispeed.ch">Contact me here!</a><br><a href="https://github.com/taetscher" target="_blank">Follow me on GitHub!</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <div class="impressum col-sm-12 col-md-12 col-lg-12">
                <p><strong>Impressum</strong> <br>
                This work is licenced under <a href="https://www.gnu.org/licenses/gpl-3.0.de.html" target="_blank">GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007</a>.<br>Last Revision: 27.01.2020, 15:40</p>
            </div>
        </div>
        <!-- Script for Visualization-App -->
        <script src="visualization.js"></script>
    </body>
</html>