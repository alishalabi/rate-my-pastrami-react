import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReviewList extends Component {
  getList() {
    return this.props.reviews.map((rev, index) => {
      return (
        <div key={index}>
          Name:{rev.name} Review: {rev.rating} Comment: {rev.comment}
        </div>
      )
    })
  }

  getAverage() {
    if (this.props.reviews.length === 0) {
      return "None"
    }
    return (this.props.reviews.reduce((sum, review) => sum += parseInt(review.rating), 0) / this.props.reviews.length).toFixed(2)
  }

  render() {
    return (
      <div>
        <h1>Average: {this.getAverage()}</h1>
        <h2>Number of Reviews: {this.props.reviews.length}</h2>
        {this.getList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    reviews: state.reviews
  }
}

export default connect(mapStateToProps)(ReviewList)
