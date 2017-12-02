import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter.jsx'

//constants
export const INCREMENT = 'INCREMENT'

//actions
export function increment() {
  return {
    type: INCREMENT
  }
}

const mapStateToProps = (state) => ({
  value: state
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => {
    dispatch(increment())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
