import React, { Component } from 'react';
import {getForcast} from './API';
import {getDate} from './Utils';




class Forecast extends Component {

  componentWillMount() {
    getForcast(this.props.params.City)
      .then(function(response){
        console.log(response)


      })
  }

  render() {
    return(
      <div className="forecast">
        <h2>{this.props.params.City}</h2>
        <h3>Select a Day</h3>

      </div>
    )
  }


}





export default Forecast
