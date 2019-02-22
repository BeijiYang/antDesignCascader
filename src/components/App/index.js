import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './index.css';
import AntCascader from '../Cascader/';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>区域选择</h2>
        </div>
        <div className="App-intro">
          <AntCascader />
        </div>
      </div>
    );
  }
}

export default App;
