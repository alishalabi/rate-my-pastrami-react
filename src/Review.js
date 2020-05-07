import React, { Component } from "react"
import { connect } from 'react-redux'
import { addReview } from './actions'

class Review extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Shalabi's Sando's",
      rating: 0,
      comment: ""
     }
  }

  render() {
    return (
      <div>
        <div><h1>{this.state.name}</h1></div>
        <div>
          <form>
            <input
              type="number"
              min = "0"
              max = "5"
              onChange={(e) => {this.setState( {rating: e.target.value})}}
              value = {this.state.rating}
            />
            <input
              placeholder = "Enter comment here"
              onChange = {(e) => {this.setState( {comment: e.target.value})}}
              value = {this.state.comment}
            />
          </form>
        </div>
        <div>
          <button onClick={(e) => {
            console.log(this.state.rating)
            this.props.addReview(this.state.name, this.state.rating, this.state.comment)
          }}>Rate</button>
        </div>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = () => {
  return {
    addReview
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Review)
