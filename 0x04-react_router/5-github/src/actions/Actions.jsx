export function fetchRepos() {
  return(dispatch) => {
    dispatch({type: 'FETCHING', is_fetching: true})
    return fetchr().then(([response, json]) => {
      if (response.status === 200) {
        dispatch({type: 'RECEIVED_REPOS', is_fetching: false, result: json})
      } else {
        console.log(response.status)
        dispatch({type: 'FETCHING', is_fetching: true})
      }
    })
  }
}

function fetchr() {
  return fetch('https://api.github.com/users/sravanthisinha/repos').then(response => Promise.all([response, response.json()]));
}

export function fetchCommits(repo_name) {
  return(dispatch) => {
    dispatch({type: 'FETCHING', is_fetching: true})
    return fetchc(repo_name).then(([response, json]) => {
      if (response.status === 200) {
        dispatch({type: 'RECEIVED_COMMITS', is_fetching: false, result: json})
      } else {
        dispatch({type: 'FETCHING', is_fetching: true})
      }
    })
  }
}

function fetchc(repo_name) {
  return fetch('https://api.github.com/repos/sravanthisinha/' + repo_name + '/commits').then(response => Promise.all([response, response.json()]));
}
