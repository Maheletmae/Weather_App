import React from "react";
import "./WeatherInfo.css";
import "bootstrap/dist/css/bootstrap.css";
import Date from "./Date";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <br />
      <hr />
      <br />

      <div className="row">
        <div className="col-8">
          <ul>
            <li className="cityname">{props.fromData.city}</li>
            <li>
              <Date date={props.fromData.date} />,{" "}
              <span className="colorful">{props.fromData.description}</span>
            </li>
            <li>
              Humidity:{" "}
              <span className="colorful">{props.fromData.humidity}%</span>,
              Wind: <span className="colorful">{props.fromData.wind}</span>km/h
            </li>
          </ul>
        </div>
        <div className="col-4">
          <img src={props.fromData.icon} alt={props.fromData.description} />
          <span className="temp">{Math.round(props.fromData.temperature)}</span>
          <span className="unit">°C</span>
        </div>
      </div>
    </div>
  );
}
