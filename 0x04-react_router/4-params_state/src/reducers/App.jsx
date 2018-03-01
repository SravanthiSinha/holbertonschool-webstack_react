const initialState =
{
  curriculums : ""
}

function AppReducer(state = initialState, action) {
  switch (action.type) {
    case "INIT_CURRICULUMS":
      return {
        ...state,
        curriculums: action.curriculums
      }
    default:
      return state;
  }
}

export default AppReducer;
