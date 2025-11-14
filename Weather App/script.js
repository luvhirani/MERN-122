document.getElementById("search-button").addEventListener("click",()=>{
    let cityName = document.getElementById("input").value
    console.log(cityName)
    fetchWeather(cityName).then((cityData)=>{
        document.getElementById("city-name").innerHTML = cityData.name
        console.log(cityData)
        document.getElementById("current-temp").innerHTML = `${cityData.main.temp}<sup style="font-size: 40px; position: relative; bottom: 20px;">o</sup>C`;
        document.getElementById("min-max-temp").innerHTML = `${cityData.main.temp_max}<sup style="font-size: 10px; position: relative; bottom: 10px;">o</sup>C/${data.main.temp_min}<sup style="font-size: 10px; position: relative; bottom: 10px;">o</sup>C`;
        document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`
    })

})

async function fetchWeather (cityName){
   let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=894693f36e8238ad2e5e6ab70160baac&units=metric`)
   let response = data.json()
   return response;
}