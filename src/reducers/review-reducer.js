import { ADD_REVIEW } from "../actions"

const reviewReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_REVIEW:
      const { name, rating, comment } = action.payload
      return [...state, { name, rating, comment }]
    default:
      return state
  }
}

export default reviewReducer
