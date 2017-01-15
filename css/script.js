$(document).ready(function(){

  //Hides the documentation link & download links.
  $('#chartdiv').click(function(){
  $('.amcharts-export-menu, div.amcharts-chart-div a').hide(function(){

  });
});

  //Displays & hides content based on user's country focus.
  $('.amcharts-map-area-RU').click(function(){
  $('.info').slideToggle(function(){

    });
  });

});

var map = AmCharts.makeChart( "chartdiv", {

  "type": "map",
  "theme": "light",
  "projection": "miller",

  "dataProvider": {
    "map": "worldLow",
    "getAreasFromMap": true
  },
  "areasSettings": {
    "autoZoom": true,
    "selectedColor": "#000000"
  },
  "balloon": {
    "adjustBorderColor": true,
    "color": "#000000",
    "fillColor": "#c9da2b",
    "drop": true,
    "textAlign": "middle"
  },
  "smallMap": {},
  "export": {
    "enabled": true,
    "position": "bottom-right"
  }
});


// function i_got_clicked(map_object){
//   //This only gets your latitude and longitude if the map is zoomed out.
//
// //  var lat = map.coordinateToLatitude(map_object.y);
// //  var long = map.coordinateToLongitude(map_object.x);
//   var coordinates = map.stageXYToCoordinates(map_object.x, map_object.y);
//   var c = coordinates;
//   console.log(c)
//   // if ((c.latitude > 43 && c.latitude < 65) && (c.longitude > 112 && c.longitude < 171)){
//   //   alert("I'm kinda, sorta, in the US.")
//   // }
//
//   // var access_token = "4460235186.1677ed0.2c9964685b3b46e3a2f93027d79eb1ac";
//   // var url = "https://api.instagram.com/v1/media/search?lat=" + lat + "&lng=" + long + "&access_token=" + access_token;
//   // $.ajax({url:url, dataType:"jsonp"}).done(function (results) { console.log(results) } );
// }
// map.addListener("click", i_got_clicked);
