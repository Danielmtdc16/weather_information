let city_name_input = 'london';
let api_key = "324f555b26fb456a08431ffbeedba4e0";

const api_url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name_input}&units=metric&appid=${api_key}`;

let weather = {
    request: function (city) {
        fetch(api_url)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    }, 
    displayWeather: function (data) {
        const { temp } = data.main;
        document.getElementById("temperature").innerText = Math.round(temp);
    }
}

weather.request(city_name_input);
