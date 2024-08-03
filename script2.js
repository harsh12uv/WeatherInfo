let lat=document.getElementById("lat");
let longg=document.getElementById("longg");

let latitude=JSON.parse(localStorage.getItem('latitude'));
let longitude=JSON.parse(localStorage.getItem('longitude'));

lat.innerHTML=`Lat:${latitude}`;
longg.innerHTML=`Long:${longitude}`
// console.log(latitude,longitude)
// function my_map_add() {
//     var myMapCenter = new google.maps.LatLng(latitude, longitude);
//     var myMapProp = {center:myMapCenter, zoom:12, scrollwheel:false, draggable:false, mapTypeId:google.maps.MapTypeId.ROADMAP};
//     var map = new google.maps.Map(document.getElementById("my_map_add"),myMapProp);
//     var marker = new google.maps.Marker({position:myMapCenter});
//     marker.setMap(map);
//     }

//     my_map_add();

    let t=document.getElementById("try");
    t.innerHTML=`<iframe src="https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed" width=80% height="300px" frameborder="0" style="border:0"></iframe>`

    const apiKey = 'fab9a4c249d94a199b6d1d29643adfb6'; // Replace with your OpenWeather API key
// const latitude = 51.5074; // Replace with the desired latitude
// const longitude = -0.1278; // Replace with the desired longitude

// Fetch the weather information
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
        // Extract the required information
        const location = data.name;
        const windspeed = data.wind.speed;
        const humidity = data.main.humidity;
        const timezone = data.timezone;
        const pressure = data.main.pressure;
        const windDirection = data.wind.deg;
        const feelsLike = data.main.feels_like;

        // // Get latitude and longitude for the One Call API
        // const lat = data.coord.lat;
        // const lon = data.coord.lon;

        // // Fetch the UV index from the One Call API
        // return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apiKey}&units=metric`)
        //     .then(response => response.json())
        //     .then(oneCallData => {
        //         const uvIndex = oneCallData.current.uvi;

                // Display the information
                const weatherInfoDiv = document.getElementById('weather-info');
                weatherInfoDiv.innerHTML = `
                    <p>Location: ${location}</p>
                    <p>Wind Speed: ${windspeed} m/s</p>
                    <p>Humidity: ${humidity}%</p>
                    <p>Timezone: ${timezone}</p>
                    <p>Pressure: ${pressure} hPa</p>
                    <p>Wind Direction: ${windDirection}°</p>
                    <p>Feels Like: ${feelsLike}°C</p>
                      `;
            // });
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
