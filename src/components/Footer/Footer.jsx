import React, { Component } from "react";
import httClient from '../../axios_client';

class Footer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      weatherData: {}
    }
  }

  getWeather = (city) => {
    httClient.get(`http://api.weatherapi.com/v1/forecast.json?key=fb300dacca6d454a9be190729211909&q=${city}&days=5&aqi=yes&alerts=yes`)
      .then((response) => {
        this.setState({
          weatherData: { ...response.data }
        })

      })
      .catch((error) => {
        console.log(error)
      })
  }

  componentDidMount() {
    this.getWeather('Madrid')
  }

  render() {
    const data = this.state.weatherData;
    if(data.current){
      return (
        <div className="footer">
          <section className="footer-weather">
            <img className="icon-footer" src={data.current.condition.icon} alt={data.current.condition.text} />
            <article className="temp-footer">{data.current.temp_c} °C</article>
          </section>
        </div>
      )
    }else{
      return(<div className="footer"></div>)
    }
  }
}

export default Footer;
