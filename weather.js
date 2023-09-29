//Variáveis
const apiKey = "3cdb5ea52738dce55386e6d9bf930922"


const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const humdElement = document.querySelector("#humidity span");

const weatherContainer = document.querySelector("#weather-data");


//Funções

const getWeatherData = async(city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()

    return data

}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerText = data.name;
    tempElement.innerText = `${data.main.temp}°C`;
    descElement.innerText = data.weather[0].description;
    humdElement.innerText = `${data.main.humidity}%`

    weatherContainer.classList.remove("hide");
}

//Eventos


searchButton.addEventListener("click", (e) =>{
    
    e.preventDefault();

    const city = cityInput.value;

    showWeatherData(city)

});

cityInput.addEventListener("keyup", (e) =>{
    if (e.code === "Enter"){
        const city = e.target.value;

        showWeatherData(city);
    }
});
