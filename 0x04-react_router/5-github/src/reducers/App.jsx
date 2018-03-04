const initialState = {
  repos: {},
  is_fetching_repos: true,
  is_fetching_commits: true,
  commits: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        is_fetching: action.is_fetching
      }
    case "RECEIVED_REPOS":
      return {
        ...state,
        is_fetching_repos: action.is_fetching,
        repos: action.result
      }
    case "RECEIVED_COMMITS":
      return {
        ...state,
        is_fetching_commits: action.is_fetching,
        commits: action.result
      }
    default:
      return state;
  }
}
