import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    return (<button onClick={this.props.fct}>{this.props.text}</button>)
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  fct: PropTypes.func.isRequired
};

export default Button;
