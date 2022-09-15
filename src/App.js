import "./App.css";
// import axios from "axios";
// import React, { useState } from "react";

export default function App() {
  let weatherData = {
    city: "Kyiv",
    temperature: 19,
    day: "Tuesday 1",
  };
  return (
    <div>
      <div className="Weather">
        <div className="row">
          <div className="col-4">
            <h1> {weatherData.city} </h1>

            <div> {weatherData.day}</div>
          </div>

          <div className="col-4">
            <span className="current-temperature">
              {weatherData.temperature}
            </span>
            <a href="/" className="current-temperature measures ">
              {" "}
              C{" "}
            </a>

            <a href="/" className="current-temperature measures ">
              {" "}
              F{" "}
            </a>
          </div>
          <div className="col-3">
            <form>
              <input
                type="search"
                name="text"
                className="search"
                placeholder="Search city"
                autoComplete="off"
              />
            </form>
          </div>
          <div className="col-1">
            <button className="currentLocation">
              <span>📍</span>
            </button>
          </div>
        </div>
      </div>
      <div className="signature">
        {" "}
        <p>
          Open source code by{" "}
          <a
            href="https://github.com/JulkaUlka/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Yuliia Hlushko{" "}
          </a>
        </p>
      </div>
    </div>
  );
}
