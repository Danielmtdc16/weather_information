
let weather = {
    api_key: "324f555b26fb456a08431ffbeedba4e0",
    request: function(city_name) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=metric&appid=" + this.api_key)
        .then((response) => response.json())
        .then((data) => this.weather_information(data));
    },
    weather_information: function(data) {
        const { name } = data;
        const { icon } = data.weather[0];
        const { temp } = data.main;
        const { temp_max } = data.main;
        const { temp_min } = data.main;
        const { humidity } = data.main;
        const { all } = data.clouds;
        const { speed } = data.wind;

        document.querySelector(".weather-information").classList.remove("loading");

        document.getElementById("name").innerText = name;

        document.querySelector(".cloud-image").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.getElementById("temperature").innerText = Math.round(temp) + "º";
        document.getElementById("temp_max").innerText = Math.round(temp_max) + "º";
        document.getElementById("temp_min").innerText = Math.round(temp_min) + "º";
        document.getElementById("humidity").innerText = Math.round(humidity) + "%";
        document.getElementById("clouds").innerText = Math.round(all) + "%";
        document.getElementById("wind_speed").innerText = speed + " Km/h";
    },
    search: function() {
        this.request(document.getElementById("city-name").value);
    }
}

weather.request("brasilia");