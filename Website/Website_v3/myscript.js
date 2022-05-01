var w = $(window).width();
var h = $(window).height();

var img_w = $(window).width() / 8.0;
var img_h = $(window).height() / 4.0;
var radius = 14;

var map = L.map('map-holder', {
	zoom: 3,
	maxZoom: 19,
	scrollWheelZoom: true,
	zoomControl: false,
	noWrap: true,
	zoomAnimation: true,
	markerZoomAnimation: true,
	maxBoundsViscosity: 0.8,
	maxBounds: [
		[89.9, 220.9],
		[-89.9, -220.9]
	]
}).setView([45, 10]);


L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 19,
	bounds: [
		[89.9, 220.9],
		[-89.9, -220.9]
	]
}).addTo(map);

var myStyle = {
	"color": "#fff",
  "weight": 2,
  "opacity": 0
}




var prevLayerClicked = null;

function onEachFeature(feature, layer) {
  layer.on({

    // mouseover: highlightFeature,
    // mouseout: resetHighlight,

    click: function(e){
      if (prevLayerClicked !== null) {
          // Reset style
        prevLayerClicked.setStyle({
          weight: 2,
          opacity: 0,
          color: 'fff',
          dashArray: '',
          fillOpacity: 0,
          fillColor: 'fff'
        });
      }
      map.fitBounds(e.target.getBounds());
      var layer = e.target;
      layer.setStyle({
        weight: 1,
        color: '#fff',
        dashArray: '',
        fillOpacity: 0,
        fillColor: 'red'
      });
      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }
      //info.update(layer.feature.properties.availability);
      prevLayerClicked = layer;
    }
  });
}

geojson = L.geoJson(countries, {
		style: myStyle,
    onEachFeature: onEachFeature
}).addTo(map);


map.setMinZoom(map.getBoundsZoom([[50.9, 160.9], [-50.9, -160.9]]));

var curr_value = null;

$(window).resize(function () {
	if (curr_value) {
		var frame = document.getElementById(curr_value.id);
		var wn = $(window).width();
		var hn = $(window).height();
		frame.width = wn * 0.6;
		frame.height = hn * 0.6;

	}
});

function setUpFrame () {
	var frame = window.frames['frame-' + curr_value.id];
	frame.populate(curr_value);
}

var sidebar = L.control.sidebar('sidebar');
map.addControl(sidebar);
var zoomControl = L.control.zoom({ position: 'topright' }).addTo(map);


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}
