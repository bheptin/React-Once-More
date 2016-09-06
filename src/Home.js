import React, { Component } from 'react';
import './App.css';


class Home extends Component {


  render() {
    return (
      <div className="mainPage">
        <div className="Header">
          <p>This is our Clever Title</p>
          
        </div>
        <h1>Enter a City and State</h1>

          {this.props.children}
      </div>

    );
  }
}



export default Home
