import {NUMBER} from '../components/PadNumber.jsx'

const intialState = {
  number: 0
}

function CalculatorApp(state = intialState, action) {
  switch (action.type) {
    case NUMBER:
      return
      Object.assign({}, state, {
        number: action.number 
      })
    default:
      return state
  }
}

export default CalculatorApp
