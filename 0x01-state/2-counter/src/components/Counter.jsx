import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 89
    };
  }
  render()
  {
    return (
      <div>
        {this.state.value}
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
