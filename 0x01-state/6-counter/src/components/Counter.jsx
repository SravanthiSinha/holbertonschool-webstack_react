import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      initValue: this.props.initValue
    };

    this.timer = this.timer.bind(this);

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    var timerId = setInterval(this.timer, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.timerId);
  }

  timer() {
    this.setState({
      value: this.state.value + 1
    })
  }

  handleClick(e) {
    this.setState({value: this.state.initValue});
  }

  render()
  {
    return (
      <div>
        {this.state.value}
        <button onClick={this.handleClick}>New value</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired
};

Counter.defaultProps = {
  value: 0
};
export default Counter;
