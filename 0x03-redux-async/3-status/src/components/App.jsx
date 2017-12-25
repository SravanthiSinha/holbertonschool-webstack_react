import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import fetch from 'cross-fetch';
import Loader from './Loader.jsx';
import Status from './Status.jsx';
import { fetching, reset } from '../actions/Actions.jsx';

class AppComponent extends React.Component {
  componentDidMount() {
    this.props.fetching()
  }
  render() {
    return (
      <div>
        <Status is_loading={this.props.is_fetching} display={!this.props.is_fetching} value={this.props.status} />
      </div>
     );
  }
}

const mapStateToProps = state => {
  return {
    is_fetching: state.is_fetching,
    status: state.status
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetching,
    reset
  }, dispatch);
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
