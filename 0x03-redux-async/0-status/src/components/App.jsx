import React from 'react';
import { connect } from 'react-redux';
import Loader from './Loader.jsx';
import Button from './Button.jsx';
import Status from './Status.jsx';


class AppComponent extends React.Component {
  render() {
    return (
      <div>
        <Button text="Fetching..." fct={() => this.props.fetching()} />
        <Button text="Received" fct={() => this.props.received("OK")} />
        <hr />
        <Loader is_loading={this.props.is_fetching} />
        <Status display={!this.props.is_fetching} value={this.props.status} />
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

const mapDispatchToProps = dispatch => {
  return {
    fetching: () => {
      dispatch({
        type: 'FETCHING'
      })
    },
    received: (status) => {
      dispatch({
        type: 'RECEIVED',
        status
      })
    },
  }
}

const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent)

export default App
