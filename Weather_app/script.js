const apikey = "6a81a4d107569c07a324910cb9558446";
const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temp = document.querySelector(".temperature");
const descrp = document.querySelector(".description");
 btn.addEventListener("click",()=>{
    let city = input.value;
    getWeather(city);
 })

 function getWeather(city){
fetch(` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'6a81a4d107569c07a324910cb9558446'}`)
.then(response=>response.json())
.then(data => {
    // console.log(data);

    const iconCode = data.weather[0].icon;
    icon.innerHTML =`<img  src="https://openweathermap.org/img/wn/${iconCode}.png" alt="icon-image"/>`;


    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    weather.innerHTML = `${weatherCity},${weatherCountry}`;

    let WeatherTemp = data.main.temp;
    WeatherTemp = (WeatherTemp - 273).toFixed(2);
    temp.innerHTML = `${WeatherTemp}°C`;

    const description = data.weather[0].description;
    descrp.innerHTML = `${description}`;


 }
)
 }










//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}