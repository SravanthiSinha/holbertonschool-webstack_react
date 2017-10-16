import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  render()
  {
    return (
      <div>
        {this.props.value}
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
