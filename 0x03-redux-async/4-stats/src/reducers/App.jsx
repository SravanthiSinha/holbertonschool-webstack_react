const initialState = {
  stats: {},
  is_fetching: false
}

export default function(state=initialState, action) {
  switch(action.type){
    case "FETCHING":
      return {
        ...state,
        is_fetching: action.is_fetching
      }
    case "RECEIVED":
      return {
        ...state,
        is_fetching: action.is_fetching,
        stats: action.result
      }
  default:
    return state;
  }
}
