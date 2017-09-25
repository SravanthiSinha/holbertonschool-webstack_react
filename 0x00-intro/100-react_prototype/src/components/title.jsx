import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render () {
    return (
      <h1>
        {this.props.name}
      </h1>
    );
  }
}

Title.propTypes = {
  name: PropTypes.string.isRequired
};

export default Title;
