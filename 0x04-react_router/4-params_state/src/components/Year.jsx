import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Year extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const curriculum_id = this.props.match.params.curriculum_id;
    const curriculum = this.props.curriculums.filter(function(c) {
      return curriculum_id == c.id
    });
    if (curriculum.length == 0) {
      return <h1>Not found
      </h1>
    } else {
      return <div>
        <h1>{curriculum[0].name}</h1>
        <h2>{curriculum[0].description}</h2>
      </div>
    }
  }
}

function mapStateToProps(state) {
  return ({curriculums: state.curriculums})
}

export default connect(mapStateToProps, null)(Year);
