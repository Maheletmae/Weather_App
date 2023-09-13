import "./App.css";
import Form_withData from "./Form&Data";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <h2>🌞App - Weather Search Engine </h2>

        <Form_withData />
        <br />
        <hr />
        <br />

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

export default App;
