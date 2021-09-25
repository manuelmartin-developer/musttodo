import React, { Component } from "react";

class WeatherCard extends Component {
  render() {
    const data = this.props.data
    return (
      <section className="current">
      <section className="weatherInfo">
        <article className="big-temp">
        <h1 className="temp">{data.current.temp_c} <span id="symbol">°C</span></h1>
        <h1 className="cityName">{data.location.name}</h1>
        <h6 className="cityRegion">{data.location.region} - {data.location.country}</h6>
        </article>
        <article className="icon-text">
          <p>{data.current.condition.text}</p>
          <img src={data.current.condition.icon} alt={data.current.condition.text} />
        </article>
      </section>
      <section className="weatherCurrent">
        <article className="other-info">
          <div>
            <p className="icon-text-title">Humidity</p>
            <p className="icon-text-data">{data.current.humidity}%</p>
          </div>
          <div>
            <p className="icon-text-title">Pressure</p>
            <p className="icon-text-data">{data.current.pressure_mb} mm</p>
          </div>
          <div>
            <p className="icon-text-title">Uv</p>
            <p className="icon-text-data">{data.current.uv}</p>
          </div>
          <div>
            <p className="icon-text-title">Wind</p>
            <p className="icon-text-data">{data.current.vis_km}km/h</p>
          </div>
        </article>
      </section>
      </section>
    )
  }
}

export default WeatherCard;
