import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Review from "./Review.js"
import ReviewList from './Review-List'
import './App.css';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Review />
        <ReviewList />
      </div>
    </Provider>
  );
}

export default App;
