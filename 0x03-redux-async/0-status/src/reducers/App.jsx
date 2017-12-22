const initialState = {
  status: '',
  is_fetching: false
}

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCHING":
      return {is_fetching: true, status: "is_fetching"}
    case "RECEIVED":
      return {is_fetching: false, status: action.status}
    default:
      return state;
  }
}

export default AppReducer;
