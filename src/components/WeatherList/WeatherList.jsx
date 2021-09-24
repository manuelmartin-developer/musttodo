import React, { Component } from "react";

class WeatherList extends Component {

  paintForecast = (data) => {
    return data.map((day, index) => {
      return <article key={index} className="forecast-day">
                <p>{day.date} </p>
                <p>{day.day.condition.text}</p>
                <img src={day.day.condition.icon} alt="{day.day.condition.text}" />
                <p>{day.day.maxtemp_c} °C</p>
              </article>

})
}

render() {
  const data = this.props.data.forecast.forecastday;

      return (
      <>
        <section className="forecast">
          {this.paintForecast(data)}
        </section>
      </>
    )
  }
}

export default WeatherList;
