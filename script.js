
let api_key = "1133ef7759c0bd7f313fd8ebc768a559";

const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${api_key}`;

function request(url) {
    fetch(url).then((data) => data.json()).then((resp) => console.log(resp['coord']['lon']));
}

request(api_url);