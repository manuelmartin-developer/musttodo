import React, { Component } from "react";
import httClient from '../../axios_client';
import Loader from '../Loader';
import WeatherCard from '../WeatherCard';
import WeatherList from '../WeatherList';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  status: {
    danger: '#66A3BB',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#66A3BB',
      contrastText: '#fff',
    },
  },
});

class Weather extends Component {

  constructor(props) {
    super(props)

    this.city = React.createRef();

    this.state = {
      isLoading: true,
      cityName: this.props.defaultCity,
      weatherData: {},
      search: []
    }
  }

  getSearch = () => {
    httClient.get(`http://api.weatherapi.com/v1/search.json?key=fb300dacca6d454a9be190729211909&q=${this.city.current.value}`)
    .then((response) => {
      this.setState({
        search: [...response.data]
      })
    })
    .catch((error) => {
      console.log(error)
    })
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

  clearInput = ()=> {
    this.city.current.value = ""
    this.setState({
      search: []
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
    console.log(data)
    const isDay = data.current.is_day
    console.log(isDay)
    const cities = this.state.search

    return (
      <section className={`weather ${isDay ? "day" : "night"}`}>
        <article className="form">
          <form autoComplete="off">
            <input list="cities" ref={this.city} onChange={this.getSearch}/>
            <datalist id="cities">
              {cities.map((city, index) => (
                <option value={city.name} key={index}>{city.name}</option>
              ))}
            </datalist>
            </form>
            </article>
            <article className="buttons">
            <ThemeProvider theme={theme}>
              <Button variant="contained" color="neutral" onClick={this.getWeatherNewCity}>
                Search
              </Button>
              <Button variant="contained" color="neutral" onClick={this.clearInput}>
                Clear
              </Button>
            </ThemeProvider>
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
