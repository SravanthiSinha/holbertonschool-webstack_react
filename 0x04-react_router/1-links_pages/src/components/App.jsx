import React from 'react';
import Header from './Header.jsx';
import {Switch, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Holberton from './Holberton.jsx'
import School from './School.jsx'

export default class App extends React.Component {
  render() {
    return (
    <div>
      <Header/>
      <Switch>
        <Route exact="exact" path='/' component={Home}/>
        <Route path='/holberton' component={Holberton}/>
        <Route path='/school' component={School}/>
      </Switch>
    </div>);
  }
}
