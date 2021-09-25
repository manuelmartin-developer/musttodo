import React, { Component } from "react";

class WeatherList extends Component {

  paintForecast = (data) => {
    return data.map((day, index) => {
      return <article key={index} className="forecast-day">
                <p className="date">{day.date.slice(5)} </p>
                <p className="small-info"><img src={day.day.condition.icon} alt="{day.day.condition.text}" /> {day.day.condition.text}</p>
                <p id="maxTemp">{day.day.maxtemp_c} °C <span id="separator">-</span><span id="minTemp"> {day.day.mintemp_c} °C</span></p>
                
              </article>

})
}

render() {
  const data = this.props.data.forecast.forecastday;

      return (
        <section className="forecast">
          {this.paintForecast(data)}
        </section>
    )
  }
}

export default WeatherList;
