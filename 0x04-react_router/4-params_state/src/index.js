import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import AppReducer from './reducers/App.jsx';

let store = createStore(
  AppReducer,
  applyMiddleware(
    thunkMiddleware
  )
)

store.dispatch(function(dispatch) {
  dispatch({
    type: 'INIT_CURRICULUMS',
    curriculums: [
      {
        id: "year_1",
        name: "Year 1",
        description: "C, Python and Sys admin"
      },
      {
        id: "year_2_webstack",
        name: "Year 2 Webstack",
        description: "Caching, RESTAPI and React"
      },
      {
        id: "year_2_low_level",
        name: "Year 2 Low level",
        description: "C, ASM and Algorithms"
      }
    ]
  });
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
