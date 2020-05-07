export const ADD_REVIEW = "ADD_REVIEW"

export const addReview = (name, rating, comment) => {
  return {
    type: ADD_REVIEW,
    payload: { name, rating, comment }
  }
}
