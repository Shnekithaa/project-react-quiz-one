import React, { Component } from 'react';
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className='home-style'>
        <div>
            <h1>Quiz App</h1>
        </div>
        <div>
            <button className='play-button'>Play</button>
        </div>
      </div>
    );
  }
}
