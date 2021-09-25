import React, { Component } from "react";

class WeatherHours extends Component {

  paintHours = (data) => {
    return data.map((hour, index) => {
      return <article key={index} className="forecast-hour">
                <p className="hour">{hour.time.slice(-5)} </p>
                <div className="hour-temp">
                  <img id="hour-image" src={hour.condition.icon} alt={hour.condition.text} /> 
                  <p>{hour.temp_c}°</p>
                </div>
              </article>

})
}

  render() {
    const data = this.props.data.forecast.forecastday[0].hour
    console.log(data)
    return (
        <section className="hours-info">
          {this.paintHours(data)}
        </section>
    )
  }
}

export default WeatherHours;
