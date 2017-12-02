import React from 'react';
import PropTypes from 'prop-types';

class PadNumber extends React.Component {
  render() {
    return (<div className="pad" onClick={()=>this.props.fct(this.props.value)}>
      {this.props.value}
    </div>);
  }
}

PadNumber.propTypes = {
  value: PropTypes.number.isRequired,
  fct: PropTypes.func
};

export default PadNumber;
