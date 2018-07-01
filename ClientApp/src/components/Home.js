import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

  state = {
    zipcode: "",
  }

  searchZip = () => {
    console.log(this.state.zipcode)
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

        <p>
          <div id="display">
          </div>
        </p>

        <p>
          <div id="display-reco">
          </div>
        </p>
      </div>
    );
  }
}
