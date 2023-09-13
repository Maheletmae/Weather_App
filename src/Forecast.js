import React from "react";
import "./Forecast.css";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      let days = ["Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.", "Sun."]; let
      date = new Date(props.data.dt * 1000); let day = date.getDay();
      <ul>
        <li>Day</li>
        <li>Img</li>
        <li>
          <span>TempMax</span>
          <span>TempMin</span>
        </li>
      </ul>
    </div>
  );
}
