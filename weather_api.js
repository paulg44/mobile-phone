// Import needed parts
const temperature = document.getElementById('temp');
const weatherIcon = document.getElementById('weather-icon');

// API Key
// key= <7c5aa96ac3444385920101530232207>

// Call the weather API
async function fetchWeather() {
  const response = await fetch(
    'https://api.weatherapi.com/v1/current.json?key=7c5aa96ac3444385920101530232207&q=derby'
  );
  const data = await response.json();
  console.log(data);
  temperature.textContent = `${data.current.temp_c}\u00B0C`;
  console.log(temperature);
  const weatherImage = data.current.condition.icon;
  weatherIcon.src = `${weatherImage}`;
}

fetchWeather();
