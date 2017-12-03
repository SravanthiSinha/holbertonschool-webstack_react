import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import CalculatorApp from './reducers/Calculator.jsx';
import App from './components/App.jsx';

let store = createStore(CalculatorApp)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
