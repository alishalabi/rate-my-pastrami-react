require('dotenv').config();
import React, { Component } from 'react'

const ApiWrapper = require('../../yelp-api-wrapper/yelp-wrapper.js')

// const test = new ApiWrapper(process.env.API_KEY, "pizza", "94117")
// console.log(test)

class RandomPastrami extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      rating: null
    }
    this.apiWrapper = new ApiWrapper(process.env.API_KEY, "pastrami", "94117")
  }

  handleSubmit(e) {
    e.preventDefault
    this.apiWrapper.getRandom().then((json) => {
      this.setState({name: json.name, rating: json.rating})
    })
    console.log(this.state)
  }


}
