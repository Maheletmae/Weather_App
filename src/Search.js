import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [inputt, setInputt] = useState("");
  let [message, setMessage] = useState("");
  const [nonNull, setnonNull] = useState(false);

  function newMessage(event) {
    //to set values
    setnonNull(true);
    setMessage({
      temperature: event.data.main.temp,
      description: event.data.weather[0].description,
      humidity: event.data.main.humidity,
      wind: event.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${event.data.weather[0].icon}@2x.png`, //to get to website page with the image (knowing img code)
    });
  }

  function newInput(event) {
    //to use each new city value
    setInputt(event.target.value);
  }

  function getAPI(event) {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputt}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(newMessage);
  }

  let form = (
    <form onSubmit={getAPI}>
      <input type="search" onChange={newInput} />
      <input type="submit" value="Search" />
    </form>
  );

  if (nonNull === true) {
    return (
      <div className="Search">
        {form}
        <ul>
          <li>Temperature: {Math.round(message.temperature)}°C</li>
          <li>Description: {message.description}</li>
          <li>Humidity: {message.humidity}%</li>
          <li>Wind: {message.wind}km/h</li>
          <li>
            <img src={message.icon} alt="Weather Icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
