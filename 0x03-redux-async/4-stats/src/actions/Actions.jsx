export function fetching() {
  return (dispatch) => {
    dispatch({type: 'FETCHING', is_fetching: true})
    return fetchStatus().then(([response, json]) => {
      if (response.status === 200) {
        dispatch({type: 'RECEIVED', is_fetching: false, result: json})
      }
    })
  }
}

function fetchStatus() {
  return fetch('http://0.0.0.0:5001/api/v1/stats').then(response => Promise.all([response, response.json()]));
}
