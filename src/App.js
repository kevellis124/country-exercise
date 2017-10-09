import React, { Component } from 'react';
import CountryContainer from './containers/CountryContainer';
import StateContainer from './containers/StateContainer';
import './App.css';
import 'react-select/dist/react-select.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <CountryContainer/>
        <StateContainer/>
      </div>
    );
  }
}

export default App;
