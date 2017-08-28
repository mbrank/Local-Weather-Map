var geoloc = [];
navigator.geolocation.getCurrentPosition(function(position) {
   var lat = position.coords.latitude;
   var lon = position.coords.longitude;
   geoloc.push(lat, lon); 
   showWeather()  
});

function cels2fahr(){
    var temperature = document.getElementById("temperature").innerHTML;
    console.log(temperature);
    if (String(temperature).slice(-1) == "F"){
	console.log(temperature.slice(13,17));
	var tempFloat = ((parseFloat(temperature.slice(13,17))-32.0)/1.8).toFixed(1);
	console.log(tempFloat);
	temperature = "Temperature: "+ String(tempFloat) + " °C";
	$('#temperature').html(temperature);
    }
    else {
	console.log(temperature.slice(13,17));
	var tempFloat = (parseFloat(temperature.slice(13,17))*1.8+32.0).toFixed(1);
	console.log(tempFloat);
	temperature = "Temperature: "+ String(tempFloat) + " °F";
	$('#temperature').html(temperature);
    }
   
    
}
function showWeather()  {
    //alert(geoloc)
    console.log(geoloc[1])
    document.getElementById("latitude").innerHTML = "Latitude: "+ String(geoloc[0]).slice(0,6)
    document.getElementById("altitude").innerHTML = "Altitude: "+ String(geoloc[1]).slice(0,6)
    console.log(geoloc[0])
    console.log("Waingro");
    var weatherUrl =  'https://api.darksky.net/forecast/cdb96e31e441a9c65d4006bd9fe38d4d/'+geoloc[0]+','+geoloc[1];
$.ajax({
  dataType: "jsonp",
  url: weatherUrl ,
}).done(function ( data ) {
    var temp = data["currently"]["temperature"];
    document.getElementById("temperature").innerHTML ="Temperature: "+ String(temp).slice(0,4) + " °F";
    document.getElementById("summary").innerHTML = "Weather: " + data["currently"]["summary"];
    if (data["currently"]["icon"]=="rain"){
	document.getElementById("imgBackg").style.backgroundImage = "url('rainImage.jpg')";
	document.getElementById("imgIcon").src = "rainIcon.png";
    }
    else if (data["currently"]["icon"]=="clear-day"){
	document.getElementById("imgBackg").backgroundImage = "url('clearDayImage.png')";
	document.getElementById("imgIcon").src = "ClearDayIcon.png";
    }
    else if (data["currently"]["icon"]=="clear-night"){
	document.getElementById("imgBackg").backgroundImage = "url('clearNightImage.png')";
	document.getElementById("imgIcon").src = "clearNightIcon.png";
    }
    else if (data["currently"]["icon"]=="snow"){
	document.getElementById("imgBackg").backgroundImage = "url('snowImage.png')";
	document.getElementById("imgIcon").src = "snowIcon.png";
    }
    else if (data["currently"]["icon"]=="sleet"){
	document.getElementById("imgBackg").backgroundImage = "url('sleetImage.png')";
	document.getElementById("imgIcon").src = "sleetIcon.png";
    }

    else if (data["currently"]["icon"]=="fog"){
	document.getElementById("imgBackg").backgroundImage = "url('fogImage.png')";
	document.getElementById("imgIcon").src = "fogIcon.png";
    }
    else if (data["currently"]["icon"]=="wind"){
	document.getElementById("imgBackg").style.backgroundImage = "url('windImage.png')";
	document.getElementById("imgIcon").src = "windIcon.png";
    }
    else if (data["currently"]["icon"]=="cloudy"){
	document.getElementById("imgBackg").backgroundImage = "url('cloudyImage.png')";
	document.getElementById("imgIcon").src = "cloudyIcon.png";
    }
    else if (data["currently"]["icon"]=="partly-cloudy-day"){
	document.getElementById("imgBackg").backgroundImage = "url('partlyCludyDayImage.png')";
	document.getElementById("imgIcon").src = "partlyCloudyDayIcon.png";
    }
    else if (data["currently"]["icon"]=="partly-cloudy-night"){
	document.getElementById("imgBackg").backgroundImage = "url('partlyCloudyNightImage.png')";
	document.getElementById("imgIcon").src = "partlyCloudyNightIcon.png";
    }
    else {
	document.getElementById("imgBackg").backgroundImage = "url('rainImage.png')";
	document.getElementById("imgIcon").src = "rainIcon.png";
    }
  console.log(JSON.stringify(data));
  })
};

