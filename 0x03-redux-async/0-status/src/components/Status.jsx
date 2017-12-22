import React from 'react';
import PropTypes from 'prop-types';

class Status extends React.Component {
  render() {
    const style = {
      width: "200px",
      height: "200px",

      display: this.props.display
        ? "block"
        : "none",

      background: this.props.value == "OK"
        ? "#008000"
        : "#FF0000"
    };
    return (
      <div style={style}></div>
    );
  }
}

Status.propTypes = {
  value: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired
};

Status.defaultProps = {
  display: false
};
export default Status;
