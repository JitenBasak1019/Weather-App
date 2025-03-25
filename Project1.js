const getWeather = (city) => {
    
    // cityName.innerHTML = city
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Dhanbad&units=metric&appid=e7b72edbb69ea539e5592a51dda909b4"
    )
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);

        document.getElementById("cityName").innerHTML = response.name ;
        
        document.getElementById("temp").innerHTML = response.main.temp ;
        document.getElementById("temp_max").innerHTML = response.main.temp_max;
        document.getElementById("temp_min").innerHTML = response.main.temp_min;
        document.getElementById("feels_like").innerHTML = response.main.feels_like + "°C";
        document.getElementById("humidity").innerHTML = response.main.humidity + "%";
        document.getElementById("pressure").innerHTML = response.main.pressure + " hPa";
        document.getElementById("sunrise").innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset").innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("wind_deg").innerHTML = response.wind.deg + "°";
        document.getElementById("wind_speed").innerHTML = response.wind.speed + " m/s";
        document.getElementById("clouds").innerHTML = response.clouds.all + "%";
    })
    .catch((error) => console.log(error));
    
}

// submit.addEventListner("click", (e) => {
//     e.preventDefault()
//     getWeather(city.value)
// })

getWeather('Dhanbad')


const getWeather2 = (city) => {
    
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=e7b72edbb69ea539e5592a51dda909b4"
    )
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        
        document.getElementById("temp2").innerHTML = response.main.temp ;
        document.getElementById("feels_like2").innerHTML = response.main.feels_like + "°C";
        document.getElementById("humidity2").innerHTML = response.main.humidity + "%";
        document.getElementById("pressure2").innerHTML = response.main.pressure + " hPa";
        document.getElementById("sunrise2").innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset2").innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("wind_deg2").innerHTML = response.wind.deg + "°";
        document.getElementById("wind_speed2").innerHTML = response.wind.speed + " m/s";
        document.getElementById("clouds2").innerHTML = response.clouds.all + "%";
    })
    .catch((error) => console.log(error));
    
}
getWeather2('Delhi')

const getWeather3 = (city) => {
    
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Mumbai&units=metric&appid=e7b72edbb69ea539e5592a51dda909b4"
    )
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        
        document.getElementById("temp3").innerHTML = response.main.temp ;
        document.getElementById("feels_like3").innerHTML = response.main.feels_like + "°C";
        document.getElementById("humidity3").innerHTML = response.main.humidity + "%";
        document.getElementById("pressure3").innerHTML = response.main.pressure + " hPa";
        document.getElementById("sunrise3").innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset3").innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("wind_deg3").innerHTML = response.wind.deg + "°";
        document.getElementById("wind_speed3").innerHTML = response.wind.speed + " m/s";
        document.getElementById("clouds3").innerHTML = response.clouds.all + "%";
    })
    .catch((error) => console.log(error));
    
}
getWeather3('Mumbai')

const getWeather4 = (city) => {
    
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Kolkata&units=metric&appid=e7b72edbb69ea539e5592a51dda909b4"
    )
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        
        document.getElementById("temp4").innerHTML = response.main.temp ;
        document.getElementById("feels_like4").innerHTML = response.main.feels_like + "°C";
        document.getElementById("humidity4").innerHTML = response.main.humidity + "%";
        document.getElementById("pressure4").innerHTML = response.main.pressure + " hPa";
        document.getElementById("sunrise4").innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset4").innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("wind_deg4").innerHTML = response.wind.deg + "°";
        document.getElementById("wind_speed4").innerHTML = response.wind.speed + " m/s";
        document.getElementById("clouds4").innerHTML = response.clouds.all + "%";
    })
    .catch((error) => console.log(error));
    
}
getWeather4('Kolkata')

const getWeather5 = (city) => {
    
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Chennai&units=metric&appid=e7b72edbb69ea539e5592a51dda909b4"
    )
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        console.log(response);
        
        document.getElementById("temp5").innerHTML = response.main.temp ;
        document.getElementById("feels_like5").innerHTML = response.main.feels_like + "°C";
        document.getElementById("humidity5").innerHTML = response.main.humidity + "%";
        document.getElementById("pressure5").innerHTML = response.main.pressure + " hPa";
        document.getElementById("sunrise5").innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
        document.getElementById("sunset5").innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
        document.getElementById("wind_deg5").innerHTML = response.wind.deg + "°";
        document.getElementById("wind_speed5").innerHTML = response.wind.speed + " m/s";
        document.getElementById("clouds5").innerHTML = response.clouds.all + "%";
    })
    .catch((error) => console.log(error));
    
}
getWeather5('Chennai')