import React from 'react';
import PropTypes from 'prop-types';

class PadNumber extends React.Component {
  render() {
    return (<div className="pad">
      {this.props.value}
    </div>);
  }
}

PadNumber.propTypes = {
  value: PropTypes.number.isRequired,
  fct: PropTypes.func
};

export default PadNumber;
