import './App.css';
import React, { Component } from 'react';
import WeatherDetails from './WeatherDetails';


class App extends Component {

  state = {
    zips: ['08701']
  }

  componentDidMount() {

    const appId = 'cb7c71219cf09eb0bb414b932669be97';

    fetch(`https://api.openweathermap.org/data/2.5/weather?zip=${this.state.zips[0]}&appid=${appId}&units=imperial&lang=he`)
      .then(response => response.json())
      .then(weatherData => {
        console.log(weatherData)
        this.setState({
          weatherDetails: weatherData
        })
      })
  }

  render() {
    return (
      <div className="container text-center">
        {this.state.weatherDetails && <WeatherDetails weather={this.state.weatherDetails}/>}
      </div>
    )
  }

}

export default App;
