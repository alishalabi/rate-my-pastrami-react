import React, { Component } from 'react'
import ApiWrapper from 'yelp-api-wrapper'
require('dotenv').config();

const sampleArray = [
  {"name":"Deli Board","rating":4.5},{"name":"A K Meats","rating":4.5},{"name":"Wise Sons Jewish Delicatessen","rating":3.5},{"name":"Tommy's Joynt","rating":4},{"name":"Handy Deli","rating":4.5},{"name":"Lou's Cafe","rating":4.5},{"name":"Cindy's Market","rating":4.5},{"name":"The Yellow Submarine","rating":4},{"name":"Submarine Center","rating":4.5},{"name":"Seakor Polish Delicatessen","rating":4.5},{"name":"Molinari Delicatessen","rating":4.5},{"name":"Bite Me Sandwiches","rating":3.5},{"name":"Giordano Bros","rating":4},{"name":"Irving Subs","rating":4.5},{"name":"Guerra Quality Meats","rating":4.5},{"name":"Parkside Market","rating":4.5},{"name":"Limoncello","rating":5},{"name":"Roberts Corned Meats","rating":5},{"name":"Morty's Delicatessen","rating":4},{"name":"Salty's","rating":5}
]


class SearchPastrami extends Component {
  constructor(props) {
    super(props)
    this.state = {
      array: null
    }
    this.search()
  }

  search() {
    // return sampleArray
    fetch('/search-pastrami/94117')
      .then(res => res.json())
      .then((json) => {
        console.log(json)
        return this.setState({array: json})
      })
      .catch( err => console.log(err.message))
  }

  renderList() {
    const ret = this.state.array.map(({name, rating}) => {
      return (
        <div className="one-pastrami-from-search">
          <h2>{name}</h2>
          <h4>{rating}</h4>
        </div>
      )
    })
    return ret
  }


  render() {
    return(
      <div className="search-results">
        {this.renderList()}
      </div>
    )
  }
}

export default SearchPastrami
