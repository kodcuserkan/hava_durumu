import React, { Component } from 'react'
import './App.css';
import Title from './Components/Title'
import Form from './Components/Form'
import Weather from './Components/Weather'

const API_KEY = "4bf50a44b5e7f362f0d86291c240bec9";

class App extends Component {
  state = {
    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity : undefined,
    description : undefined,
    error : undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
     if (city && country) {

      console.log(data);

      this.setState ({
      temperature : data.main.temp,
      city : data.name,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : ""
    });
    } 
    
    
    
  }

  render() {
    return (
      <div>
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-container">
                <Title></Title>
              </div>
              <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather temperature={this.state.temperature} city={this.state.city} country={this.state.country} humidity={this.state.humidity} description={this.state.description} error={this.state.error}></Weather>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}
export default App;
