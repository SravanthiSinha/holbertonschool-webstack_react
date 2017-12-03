import React from 'react'
import { connect } from 'react-redux'
import PadOperator from '../components/PadOperator.jsx'

//action types
export const OPERATOR = 'OPERATOR'

//action creator
export function operator_click(operator) {
  return {
    type: OPERATOR,
    operator
  }
}

const mapDispatchToProps = (dispatch) => ({
  fct: (ev) => {
    dispatch(operator_click(ev))
  }
})

export default connect(null, mapDispatchToProps)(PadOperator);
