import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from './Loader.jsx';
import { fetching } from '../actions/Actions.jsx';

class Stats extends React.Component {
  componentDidMount() {
    this.props.fetching()
  }
  render() {
    if (this.props.is_fetching) {
      return (
        <Loader is_loading={this.props.is_fetching} />
      )
    }
    else {
      var stats = [];
      for (var key in this.props.stats) {
        stats.push(<li key={key}><b>{key}</b>: {this.props.stats[key]}</li>)
      }
      return (
        <ul>{stats}</ul>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    is_fetching: state.is_fetching,
    stats: state.stats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetching
  }, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Stats)

export default App
