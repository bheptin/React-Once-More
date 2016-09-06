import React, { Component } from 'react';
import './App.css';


class Search extends Component {
    constructor() {
      super();
      this.state = {userInput: ''}
    }
  handleChange(event) {
    this.setState({userInput: event.target.value})
  }
  handleSubmitCity(event) {
    event.preventDefault()
    this.context.router.push(`/forecast/${this.state.userInput}`)
    console.log(this.state.userInput)
  }

  render() {
    return(
      <div id="search">
        <input onChange={this.handleChange.bind(this)} type="text"/>
        <button onClick={this.handleSubmitCity.bind(this)}>Get Weather</button>
      </div>
    )
  }
}
Search.contextTypes = {router: React.PropTypes.object};
export default Search
