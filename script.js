// Replace with your OpenWeatherMap API key
const apiKey = 'b1933461430116afc706d7e2a63f7674';
const city = 'Hyderabad'; // You can change the city to any city you like
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

document.addEventListener('DOMContentLoaded', function() {
    fetchWeatherData();
});

function fetchWeatherData() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('city-name').textContent = 'Error loading data';
            document.getElementById('weather-details').textContent = 'Please try again later.';
        });
}

function displayWeatherData(data) {
    const cityName = data.name;
    const temperature = data.main.temp;
    const description = data.weather[0].description;
    const humidity = data.main.humidity;

    document.getElementById('city-name').textContent = cityName;
    document.getElementById('weather-details').innerHTML = `
        <p><strong>Temperature:</strong> ${temperature}°C</p>
        <p><strong>Condition:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
    `;
}
