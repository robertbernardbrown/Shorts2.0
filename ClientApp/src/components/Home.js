import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

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
        <div className="jumbotron text-center container">
          <h1>The Shortist</h1>
          <p>Should you wear shorts or nah?</p>
        </div>

        {/* <Panel bsStyle="primary">
          <Panel.Heading>
            <Panel.Title componentClass="h3">Panel heading</Panel.Title>
          </Panel.Heading>
          <Panel.Body>Panel content</Panel.Body>
        </Panel> */}

        <div className="container">
          <Panel>
            <div className="card">
              <div className="container">
                <p>
                  We'll keep this short:
                  <ul>
                    <li>Enter your zipcode</li>
                    <li>Find out if it's cool to wear shorts today</li>
                    <li>Chillax</li>
                  </ul>
                </p>
              </div>

              <div className="formContainer">
                <form method= "post">
                  <div id="zipform">
                    <input type="text" id="zipcode" value={this.state.fillForm} onChange={this.fillForm}/>
                  </div>
                  <button className="btn btn-block btn-primary button" id="setzipcode" onClick={this.searchZip}>
                    Set Zipcode
                  </button>
                </form>
              </div>
            </div>
          </Panel>
        </div>

        {!this.state.searchComplete ? 
        <div id="display">
          <p></p>
        </div>
        :
        <div className="container">
          <Panel>
            <div>
              <div id="weather-display">
                <p>You're currently in {this.state.forecasts.location.name}, {this.state.forecasts.location.region}.</p>
                <p>It's currently {this.state.forecasts.current.temp_f} degrees and {this.state.forecasts.current.condition.text} out.</p>
              </div>
              <div id="reco-display">
                {this.state.forecasts.current.temp_f > 70 ? 
                <div>
                  <i class="fas fa-sun fa-5x"></i>
                  <p>Wear your shorts!</p>
                </div>
                :
                <div>
                  <i class="fas fa-hand-paper fa-5x"></i>
                  <p>No shorts today :(</p>
                </div>
                }
              </div>
            </div>
          </Panel>
        </div>
        }
      </div>
    );
  }
}
