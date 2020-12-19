import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Main/>
      </div>
        
    );
  }
}

export default App;
