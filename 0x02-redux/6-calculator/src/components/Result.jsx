import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Result extends React.Component {
  render() {
    return (<div className="result">
      {this.props.value}
    </div>);
  }
}

Result.propTypes = {
  value: PropTypes.number.isRequired
};

export default Result;
