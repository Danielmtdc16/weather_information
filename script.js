let city_name_input = 'london';

function for_capital_letter(city_name) {
    const list_of_words = city_name.split(" ");
    return list_of_words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join("");
}

city_name_input = for_capital_letter(city_name_input);

let api_key = "1133ef7759c0bd7f313fd8ebc768a559";

const api_geographic_coordinates = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name_input}&limit=1&appid=${api_key}`;

console.log(api_geographic_coordinates);

const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${api_key}`;

function coordinate_request(url) {
    fetch(url).then((data) => {
        return data.json();
    }).then((resp) => {
        console.log(resp[0]["lat"]);
    });
}

console.log(coordinate_request(api_geographic_coordinates));