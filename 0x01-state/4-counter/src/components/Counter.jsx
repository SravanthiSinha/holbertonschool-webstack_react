import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: this.props.initValue
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({value: 1000}));
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
