import React, { Component } from 'react'
import './App.css'
import './index';
import './components/MyCars'
import MyCars from './components/MyCars';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MyCars />
       
      </div>
    );

  }

}

export default App;
