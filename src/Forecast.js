import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast(props) {
  let [forecast, setForecast] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function day(time) {
    let days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."];
    let date = new Date(time * 1000);
    let day = date.getDay();
    return days[day];
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (dailyInfo, index) {
            if (index < 5) {
              return (
                <div className="col dailyInfo" key={index}>
                  <ul>
                    <li>{day(dailyInfo.dt)}</li>
                    <li className="smallImages">{dailyInfo.weather[0].icon}</li>
                    <li>
                      <span> `${Math.round(dailyInfo.temp.max)}°`</span>
                      <span>`${Math.round(dailyInfo.temp.min)}°`</span>
                    </li>
                  </ul>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
