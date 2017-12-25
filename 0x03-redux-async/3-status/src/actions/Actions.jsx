export function fetching() {
  return(dispatch, getState) => {
    dispatch({
      type: 'FETCHING',
      is_fetching: true
    })
    fetch('http://0.0.0.0:5001/api/v1/status')
      .then(response => {
        dispatch({
          type: 'RECEIVED',
          is_fetching: false,
          status: response.statusText
        })
      })
  }
}

export function reset() {
  return(dispatch, getState) => {
    dispatch({
      type: 'RESET'
    })
  }
}
