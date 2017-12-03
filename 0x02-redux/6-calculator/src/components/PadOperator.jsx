import React from 'react';
import PropTypes from 'prop-types';

class PadOperator extends React.Component {
  render() {
    return (<div className="pad operator" onClick={()=>this.props.fct(this.props.value)}>
      {this.props.value}
    </div>);
  }
}

PadOperator.propTypes = {
  value: PropTypes.string.isRequired,
  fct: PropTypes.func
};

export default PadOperator;
