import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Busy B Weather</h1>
        <iframe
          style="border-radius:12px"
          src="https://open.spotify.com/embed/track/5t6PaJ7ZIO4DocmryyXTHe?utm_source=generator&theme=0"
          width="40%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
        <WeatherSearch />
        <a
          className="App-link"
          href="https://github.com/sanjra/busyb"
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
