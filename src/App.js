import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
// import { Link } from 'react-router-dom';

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>App</h1> */}
        <Main/>
      </div>
        
    );
  }
}

export default App;
