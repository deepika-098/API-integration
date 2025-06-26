async function getWeather() {
  const city = document.getElementById("city").value;
  const apiKey = "603e56f5664fa64c1491a11821fb3dbe";
 // replace this with your real OpenWeatherMap key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById("result").innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Condition: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${data.wind.speed} m/s</p>
      `;
    } else {
      document.getElementById("result").innerHTML = `<p>City not found!</p>`;
    }
  } catch (error) {
    document.getElementById("result").innerHTML = `<p>Error fetching data</p>`;
    console.error(error);
  }
}
