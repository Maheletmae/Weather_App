import "./App.css";
//import Search from "./Search";
import Testing from "./Testing";

function App() {
  return (
    <div className="App">
      <h1>Weather App: Search Engine</h1>
      <br />
      <Testing />
      <br />
      <hr />
      <br />
      <p>
        This project was coded by <a>Mahelet Lisa Seleshi</a> and is
        open-sourced on{" "}
        <a
          href="https://github.com/Maheletmae/Weather_App"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://steady-cuchufli-d72249.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Netlify
        </a>
        .
      </p>
    </div>
  );
}

export default App;
