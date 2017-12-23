const initialState = {
  status: '',
  is_fetching: false
}

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING":
      return {is_fetching: action.is_fetching, status: action.status}
    case "RESET":
      return {is_fetching: false, status: ""}
    default:
      return state;
  }
}

export default AppReducer;
