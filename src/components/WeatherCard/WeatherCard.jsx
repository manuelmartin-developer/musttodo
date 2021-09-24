import React, { Component } from "react";

class WeatherCard extends Component {
  render() {
    const data = this.props.data
    return (
      <section className="current">
      <section className="weatherInfo">
        <h1 className="temp">{data.current.temp_c} °C</h1>
        <h1 className="cityName">{data.location.name}</h1>
        <h6 className="cityRegion">{data.location.region} -{data.location.country}</h6>
      </section>
      <section className="weatherCurrent">
        <article className="icon-text">
          {data.current.condition.text}
          <img src={data.current.condition.icon} alt={data.current.condition.text} />
        </article>
      </section>
      </section>
    )
  }
}

export default WeatherCard;
