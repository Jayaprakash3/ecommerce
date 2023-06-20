import React, { Component } from 'react';
import './App.css';
import Menus from './Menus';
import MyComponent from './Mobiles';

class App extends Component {
  render() {

    
    return (
      <div className="App">
       <Menus />
       <MyComponent />

      </div>
    );
  }
}

export default App;
