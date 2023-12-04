import React, { Component } from 'react';
import "./Quiz.css";

export default class Quiz extends Component {
  render() {
    return (
      <div className='container'>
        <div className='card'>
            <h1>Question</h1>
            <h3><span>1</span> of 15</h3>
            <h2>Which is the only mammal that can jump?</h2>
            <div className='buttons'>
                <button>Dog</button>
                <button>Elephant</button>
            </div>
            <div className='buttons'>
                <button>Goat</button>
                <button>Lion</button>
            </div>
            <div className='bottom-buttons'>
                <button style={{backgroundColor: '#3E7EAA'}}>Previous</button>
                <button style={{backgroundColor: '#008001'}}>Next</button>
                <button style={{backgroundColor: '#FF0000'}}>Quit</button>
            </div>
        </div>
      </div>
    );
  }
}
