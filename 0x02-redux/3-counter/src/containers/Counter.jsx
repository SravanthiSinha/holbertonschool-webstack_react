import React from 'react'
import { connect } from 'react-redux'
import Counter from '../components/Counter.jsx'
import Button from '../components/Button.jsx'

//constants
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'


const mapStateToProps = (state) => ({
  value: state
})


export default connect(mapStateToProps, null)(Counter);
