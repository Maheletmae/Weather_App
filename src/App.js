import "./App.css";
import FormWithData from "./Form&Data";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <h2>🌞App - Weather Search Engine </h2>

        <FormWithData InitialCity="London" />

        <footer>
          <hr />
          <br />
          This project was coded by{" "}
          <span className="name">Mahelet Lisa Seleshi</span> and is open-sourced
          on{" "}
          <a
            href="https://github.com/Maheletmae/Weather_App"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            {" "}
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
