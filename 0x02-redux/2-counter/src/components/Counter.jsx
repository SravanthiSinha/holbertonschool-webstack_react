import React from 'react'
import Button from './Button.jsx'

class Counter extends React.Component {
  render() {
    return (<div>
      <div>{this.props.value}</div>
      <div>
        <Button text='Increment' fct={this.props.onIncrement}/>
        <Button text='Decrement' fct={this.props.onDecrement}/>
      </div>
    </div>)
  }
}

export default Counter
