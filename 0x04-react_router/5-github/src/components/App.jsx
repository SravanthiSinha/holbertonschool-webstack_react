import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Repos from './Repos.jsx'
import Repo from './Repo.jsx'

export default class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Repos}/>
        <Route path='/repo/:repo' component={Repo}/>
      </Switch>
     );
  }
}
