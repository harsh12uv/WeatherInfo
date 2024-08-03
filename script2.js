let lat=document.getElementById("lat");
let longg=document.getElementById("longg");



document.addEventListener('DOMContentLoaded',getLocation);
function getLocation() {
    if (navigator.geolocation) {

      
      navigator.geolocation.getCurrentPosition(showPosition);
       
    } else { 
       
      alert("location not granted");
  }
}
  function showPosition(position) {
    // ans.innerHTML = "Latitude: " + position.coords.latitude + 
    // "<br>Longitude: " + position.coords.longitude;

    console.log("show position called")
    localStorage.setItem("longitude",position.coords.longitude);
    localStorage.setItem("latitude",position.coords.latitude);

  }





let latitude=JSON.parse(localStorage.getItem('latitude'));
let longitude=JSON.parse(localStorage.getItem('longitude'));






lat.innerHTML=`Lat:${latitude}`;
longg.innerHTML=`Long:${longitude}`


    let t=document.getElementById("try");
    t.innerHTML=`<iframe src="https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed" width=80% height="300px" frameborder="0" style="border:0"></iframe>`

    const apiKey = 'fab9a4c249d94a199b6d1d29643adfb6'; // Replace with your OpenWeather API key
// const latitude = 51.5074; // Replace with the desired latitude
// const longitude = -0.1278; // Replace with the desired longitude


let UV_index;
fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&APPID=7c1395001860d0592ae523653f49e8f3`)
.then((responce)=>{
    if(!responce.ok){
        throw new Error('something went wrong');
    }
    return responce.json();
})
.then((data)=>{
    console.log(data);
    
    
        UV_index = data.current.uvi; 
        console.log(UV_index);
       
})
.catch((error)=>{
    console.log(error);
});




















// Fetch the weather information
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        // Extract the required information
        const location = data.name;
        const windspeed = Math.round(data.wind.speed*18/5 * 100) / 100;
        const humidity = data.main.humidity;
        const timezone = data.timezone;
        const pressure = (data.main.pressure/1013.25).toFixed(2);
        const degrees = data.wind.deg;
        const feelsLike = data.main.feels_like;

        let result = timezone/ 3600;
        let hrs = Math.trunc(result); // Get the integer part
        let decimalPart = result - hrs;
        let minutes=decimalPart*60;

        
        let timeZone=`GMT + ${hrs}:${minutes}`;

        const directions = ['North', 'North-North East', 'North East', 'East-North East', 'East', 'East-South East', 'South East', 'South-South East', 'South', 'South-South West', 'S West', 'West-South West', 'West', 'West-North West', 'North West', 'North-North West', 'North'];
        const index = Math.round(degrees / 22.5) % 16;

        const windDirection=directions[index];

                const weatherInfoDiv = document.getElementById('weather-info');
                weatherInfoDiv.innerHTML = `
                    <p>Location: ${location}</p>
                    <p>Wind Speed: ${windspeed} km/hr</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Timezone: ${timeZone}</p>
                    <p>Pressure: ${pressure} atm</p>
                    <p>Wind Direction: ${windDirection}</p>
                    <p>UV Index:0</p>
                    <p>Feels Like: ${feelsLike}°C</p>
                   
                   
               `;
            // });
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
