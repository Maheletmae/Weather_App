import React from "react";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

export default function Testing() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
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
    </div>
  );
}
