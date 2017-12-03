import {NUMBER} from '../containers/PadNumber.jsx'
import {OPERATOR} from '../containers/PadOperator.jsx'

const intialState = {
  number: 0,
  result: 0,
  computed: false,
  operator: ''
}

function CalculatorApp(state = intialState, action) {
  switch (action.type) {
    case NUMBER:

      if (state.operator != '') {
        state.result = state.number;
        state.number = 0;
        console.log(state);
      }
      let no = (
        state.number == undefined
        ? 0
        : Number([state.number, action.number].join('')));
      if (state.operator != '' && state.operator != 'c' && state.operator != '=') {
        switch (state.operator) {
          case '+':
            state.result += no;
            break;
          case '-':
            state.result -= no;
            break;
          case '/':
            state.result /= no;
            break
          case 'x':
            state.result *= no;
            break
        }
        state.computed = true
      } else {
        state.computed = false
      }
      return {
        ...state,
        number: no,
        operator: ''
      }
    case OPERATOR:
      if (action.operator == 'c') {
        state.number = 0
        state.result = 0
        return {
          ...state,
          operator: action.operator
        }
      } else if (action.operator == '=') {
        if (state.computed == true)
          state.number = state.result;
        return {
          ...state,
          operator: action.operator,
          computed: false
        }
      } else {
        if (state.computed == true)
          state.number = state.result;
        return {
          ...state,
          operator: action.operator,
          computed: true
        }
      }
    default:
      return state;
  }
}

export default CalculatorApp
