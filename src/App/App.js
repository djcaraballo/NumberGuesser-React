import React, { Component } from 'react';
import './App.css';
import MinMaxForm from '../MinMaxForm/MinMaxForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Number<span>Guesser</span></h1>
        <MinMaxForm />
      </div>
    );
  }
}

export default App;
