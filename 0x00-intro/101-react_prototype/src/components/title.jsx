import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render () {
    return (
      <h1>
        [{this.props.id}] {this.props.name}
      </h1>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

Title.defaultProps = {
  id: 0
};
export default Title;
