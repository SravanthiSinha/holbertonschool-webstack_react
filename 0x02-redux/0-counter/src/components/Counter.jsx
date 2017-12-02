import React from 'react'

class Counter extends React.Component {
  render() {
    return (<div>
      <div>{this.props.value}</div>
      <div>
        <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    </div>)
  }
}

export default Counter
