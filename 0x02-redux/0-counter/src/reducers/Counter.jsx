import {INCREMENT} from '../containers/Counter.jsx'

const intialState = 0

function CounterApp(state = intialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    default:
      return state
  }
}

export default CounterApp
