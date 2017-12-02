import React from 'react';
import Result from './Result.jsx';
import PadNumber from '../containers/PadNumber.jsx';
import PadOperator from './PadOperator.jsx';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Result value={0} />
        </div>
        <div className="row">
          <PadNumber value={7} />
          <PadNumber value={8} />
          <PadNumber value={9} />
          <PadOperator value="/" />
        </div>
        <div className="row">
          <PadNumber value={4} />
          <PadNumber value={5} />
          <PadNumber value={6} />
          <PadOperator value="x" />
        </div>
        <div className="row">
          <PadNumber value={1} />
          <PadNumber value={2} />
          <PadNumber value={3} />
          <PadOperator value="-" />
        </div>
        <div className="row">
          <PadOperator value="c" />
          <PadNumber value={0} />
          <PadOperator value="=" />
          <PadOperator value="+" />
        </div>
      </div>
     );
  }
}


const mapStateToProps = (state) => ({
  value: state.number
})


export default connect(mapStateToProps, null)(App);
