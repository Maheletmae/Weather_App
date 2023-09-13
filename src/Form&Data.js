import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import WeatherInfo from "./WeatherInfo";

export default function Form_withData() {
  const [city, setCity] = useState(null);
  const [data, setData] = useState({ ready: false });

  function handleSubmit(event) {
    event.preventDefault();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (data.ready) {
    return (
      <div className="Testing">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                onChange={handleCityChange}
                className="form-control"
                placeholder="Enter a city.."
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-outline-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo />
      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}