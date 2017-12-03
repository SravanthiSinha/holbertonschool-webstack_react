import {NUMBER} from '../containers/PadNumber.jsx'
import {OPERATOR} from '../containers/PadOperator.jsx'

const intialState = {
  number: 0,
  operator: ''
}

function CalculatorApp(state = intialState, action) {
  switch (action.type) {
    case NUMBER:
      return {
        ...state,
        number: state.number == undefined
          ? 0
          : Number([state.number, action.number].join(''))
      }
    case OPERATOR:
      if (action.operator == 'c') {
        state.number = 0
        return {
          ...state,
          operator: action.operator
        }
      }
    default:
      return state;
  }
}

export default CalculatorApp
