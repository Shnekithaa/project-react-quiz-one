import React, { Component } from 'react';
import Home from './Components/Home';
import Quiz from './Components/Quiz';
import Result from './Components/Result';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Home />
        <Quiz />
        <Result />
      </div>
    );
  }
}


