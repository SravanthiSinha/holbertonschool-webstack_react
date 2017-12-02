import React from 'react';
import { connect } from 'react-redux'
import {INCREMENT,DECREMENT} from '../containers/Counter.jsx'
import CounterContainer from '../containers/Counter.jsx';
import Button from './Button.jsx'


//actions
export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => {
    dispatch(increment())
  },
  onDecrement: () => {
    dispatch(decrement())
  }
})

class App extends React.Component {
  render() {
    return (
    <div>
    <CounterContainer/>
    <Button text='Increment' fct={this.props.onIncrement}/>
    <Button text='Decrement' fct={this.props.onDecrement}/>
    </div>);
  }
}

export default connect(null, mapDispatchToProps)(App);
