console.log('javascript connected!');


async function fetchWeather() {
    const apiKey = process.env.OPEN_WEATHER_API_KEY;
    const city = `Richmond`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        displayWeather(data);
    } catch (error) {
        console.error(error);
    }
}

fetchWeather();

const displayWeather = (weather) => {
    const weatherIcon = document.getElementById('weather-icon');
    const weatherImg = document.createElement('img');
    const iconId = weather.weather[0].icon;
    weatherImg.src = `https://openweathermap.org/img/w/${iconId}.png`;
    weatherIcon.appendChild(weatherImg);
    document.getElementById('weather-temp').textContent = weather.main.temp + '°F';
    document.getElementById('weather-description').textContent = weather.weather[0].description
} 

const carousel = new bootstrap.Carousel('#homeCarousel', {
    interval: 2000,
    pause: false
});

// when the pause button is clicked, pause the carousel
const carouselButton = document.getElementById('carouselButton');
const faIcon = document.getElementById('faButton');

carouselButton.addEventListener('click', function () {
    if (faIcon.classList.contains('fa-pause')) {
        faIcon.classList.remove('fa-pause');
        faIcon.classList.add('fa-play');
        carousel.pause();
    } else {
        faIcon.classList.remove('fa-play');
        faIcon.classList.add('fa-pause');
        carousel.cycle();
    }
})