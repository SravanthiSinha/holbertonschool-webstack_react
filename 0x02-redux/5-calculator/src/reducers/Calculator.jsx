import {NUMBER} from '../containers/PadNumber.jsx'

const intialState = {
  number: 0
}

function CalculatorApp(state = intialState, action) {
switch(action.type){
 case NUMBER:
   return {
     ...state,
     number: state.number == undefined ? 0 : Number([state.number, action.number].join(''))
   }
 default:
   return state;
 }
}

export default CalculatorApp
