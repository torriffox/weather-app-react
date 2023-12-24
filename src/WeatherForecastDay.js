import React from "react";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    return Math.round(props.data.temperature.maximum);
  }

  function maxTemperature() {
    return Math.round(props.data.temperature.minimum);
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>

      <img
        className="WeatherForecast-img"
        src={props.data.condition.icon_url}
        alt={props.data.description}
      />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">
          {minTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {maxTemperature()}°
        </span>
      </div>
    </div>
  );
}
