import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Review from "./Review.js"
import ReviewList from './Review-List'
import RandomPastrami from './Random-Pastrami'
import SearchPastrami from './Search-Pastrami'
import './App.css';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="left-portion">
          <SearchPastrami />
        </div>
        <div className="center-portion">
          <Review />
          <RandomPastrami />
        </div>
        <div className="right-portion">
          <ReviewList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
