import React from "react";
import "./WeatherInfo.css";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-8">
          <ul>
            <li>
              Tuesday <span className="colorful">08:16</span>, broken clouds
            </li>
            <li>
              Humidity: <span className="colorful">90%</span>, Wind:{" "}
              <span className="colorful">5.81km/h</span>
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img alt="" />
          <p className="unit">°C</p>
        </div>
      </div>
    </div>
  );
}
