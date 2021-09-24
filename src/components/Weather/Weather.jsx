import React, { Component } from "react";
import httClient from '../../axios_client';
import Loader from '../Loader'
import WeatherCard from '../WeatherCard'
import WeatherList from '../WeatherList'

class Weather extends Component {

  constructor(props) {
    super(props)

    this.city = React.createRef();

    this.state = {
      isLoading: true,
      cityName: this.props.defaultCity,
      weatherData: {}
    }
  }

  getWeather = (city) => {
    httClient.get(`http://api.weatherapi.com/v1/forecast.json?key=fb300dacca6d454a9be190729211909&q=${city}&days=5&aqi=yes&alerts=yes`)
      .then((response) => {
        this.setState({
          isLoading: false,
          cityName: response.data.location.name,
          weatherData: { ...response.data }
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }
  getWeatherNewCity = event => {
    event.preventDefault();
    let city = this.city.current.value;


    httClient.get(`http://api.weatherapi.com/v1/forecast.json?key=fb300dacca6d454a9be190729211909&q=${city}&days=5&aqi=yes&alerts=yes`)
      .then((response) => {
        this.setState({
          isLoading: false,
          cityName: response.data.location.name,
          weatherData: { ...response.data }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getWeather(this.state.cityName)
  }

  render() {

    if (this.state.isLoading) {
      return (
        <Loader />
      )
    }
    const data = this.state.weatherData

    return (
      <section className="weather">
        <article className="form">
          <form autoComplete="off">
            <input type="text" name="" id="" ref={this.city} />
            <input type="submit" value="Search" onClick={this.getWeatherNewCity} />
          </form>
        </article>
        <WeatherCard data={data} />
        <WeatherList data={data} />
      </section>
    )


  }
}

Weather.defaultProps = {
  defaultCity: 'Madrid'
}

export default Weather;
