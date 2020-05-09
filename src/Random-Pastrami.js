import React, { Component } from 'react'
import ApiWrapper from 'yelp-api-wrapper'
require('dotenv').config();

// const ApiWrapper = require('../../yelp-api-wrapper/yelp-wrapper.js')

// const test = new ApiWrapper(process.env.API_KEY, "pizza", "94117")
// console.log(test)

class RandomPastrami extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      rating: null
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:4000/random-pastrami/94117')
      .then(res => res.json())
      .then((json) => {
        this.setState({name: json.name, rating: json.rating})
      })
  }

  renderRandomPastrami() {
    if (this.state.name === null) {
      return undefined
    }
    const {name, rating} = this.state

    return (
      <div>
        <div>Name: {name}</div>
        <div>Rating: {rating}</div>
      </div>
    )
  }

  render() {
    return (
      <div className="random-pastrami">
        <button onClick={e => this.handleSubmit(e)}>Get Random Recommendation</button>
        {this.renderRandomPastrami()}
      </div>
    )
  }
}

export default RandomPastrami;
