import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity = "New York"/>
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/torriffox" target="_blank">
            Viktoriia Bril
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/torriffox/weather-app-react"
            target="_blank"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a href="https://dainty-halva-abb75a.netlify.app/" target="_blank">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
