import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast(props) {
  let days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let maxtemp = Math.round(props.data.temp.max);
  let mintemp = Math.round(props.data.temp.min);
  let miniIcon = props.data.weather[0].icon;

  let [forecast, setForecast] = useState(null);
  let [city, setCity] = useState(null);

  const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

  return (
    <div className="Forecast">
      <ul>
        <li>{days[day]}</li>
        <li className="smallImages">{miniIcon}</li>
        <li>
          <span> `${maxtemp}°`</span>
          <span>`${mintemp}°`</span>
        </li>
      </ul>
    </div>
  );
}
