import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Busy B Weather</h1>
        <WeatherSearch />
        <a
          className="App-link"
          href="https://github.com/sanjra/busyb-reactweather"
          target="_blank"
          rel="noopener noreferrer"
        >
          busy b on github
        </a>
      </header>
    </div>
  );
}

export default App;
