import React from 'react'
import { connect } from 'react-redux'
import PadNumber from '../components/PadNumber.jsx'

//action types
export const NUMBER = 'NUMBER'

//action creator
export function number_click(number) {
  return {
    type: NUMBER,
    number
  }
}

const mapDispatchToProps = (dispatch) => ({
  fct: (ev) => {
    dispatch(number_click(ev))
  }
})

export default connect(null, mapDispatchToProps)(PadNumber);
