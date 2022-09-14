import "./App.css";
import axios from "axios";
import React, { useState } from "react";

export default function App() {
  let [city, setCity] = useState(" ");
  let [message, setMessage] = useState(" ");
  let apiKey = "ff425fafca53dfa00a8edad5ed4545b5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  axios.get(apiUrl).then(showWeather);
  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handlSubmit(event) {
    event.preventDefault();
    setMessage(
      <ul>
        <li>temperature: {Math.round(temperature)}°C </li>
        <li>description: {description}</li>
        <li>wind speed: {wind} km/h</li>
        <li>humidity: {humidity} %</li>
        <li>
          {" "}
          <img src={icon} alt={description} />
        </li>
      </ul>
    );
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="forecast">
      <form onSubmit={handlSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <p>{message}</p>
    </div>
  );
}
