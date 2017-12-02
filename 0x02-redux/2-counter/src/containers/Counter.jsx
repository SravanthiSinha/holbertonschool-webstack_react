import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter.jsx'

//constants
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

//actions
export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

const mapStateToProps = (state) => ({
  value: state
})

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => {
    dispatch(increment())
  },
  onDecrement: () => {
    dispatch(decrement())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
