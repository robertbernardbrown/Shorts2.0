import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  state = {
    zipcode: "",
    forecasts: {},
    searchComplete: false
  }

  searchZip = (e) => {
    e.preventDefault();
    console.log(this.state.zipcode)
    fetch('https://api.apixu.com/v1/current.json?key=3844afb51b4b4d96840161310172608&q=' + this.state.zipcode)
      .then(response => response.json())
      .then(data => {
        this.setState({ forecasts: data, searchComplete: true });
        console.log(this.state.forecasts);
      })
  }

  fillForm = (e) => {
    this.setState({
      zipcode: e.target.value
    })
    console.log(this.state.zipcode);
  }

  render() {

    return (
      <div>
        <h1>The Shortist</h1>
        <h2>Should you wear shorts or nah?</h2>

        <p>
          We'll keep this short:
          <ul>
            <li>Enter your zipcode</li>
            <li>Find out if it's cool to wear shorts today</li>
            <li>Chillax</li>
          </ul>
        </p>

        <form method= "post">
          <div id="zipform">
            <input type="text" id="zipcode" value={this.state.fillForm} onChange={this.fillForm}/>
          </div>
          <button className="btn btn-primary button" id="setzipcode" onClick={this.searchZip}>
            Set Zipcode
          </button>
        </form>

        {!this.state.searchComplete ? 
        <div id="display">
          <p></p>
        </div>
        :
        <div>
          <div id="weather-display">
            <p>You're currently in {this.state.forecasts.location.name}, {this.state.forecasts.location.region}.</p>
            <p>It's currently {this.state.forecasts.current.temp_f} degrees and {this.state.forecasts.current.condition.text} out.</p>
          </div>
          <div id="reco-display">
            {this.state.forecasts.current.temp_f > 70 ? 
            <div>
              <p>Wear your shorts!</p>
            </div>
            :
            <div>
              <p>No shorts today :(</p>
            </div>
            }
          </div>
        </div>
        }
      </div>
    );
  }
}
