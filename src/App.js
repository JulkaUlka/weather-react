import "./App.css";
import React from "react";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kyiv" />

        <footer className="signature">
          This project was coded by{" "}
          <a
            href="https://silly-squirrel-c3d30e.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yuliia Hlushko
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/JulkaUlka/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
