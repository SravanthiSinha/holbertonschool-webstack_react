import React from 'react'
import { Link } from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'

import Home from './Home.jsx'
import Holberton from './Holberton.jsx'
import School from './School.jsx'
import Curriculums from './Curriculums.jsx'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/holberton'>Holberton</Link></li>
        <li><Link to='/school'>School</Link></li>
        <li><Link to='/curriculums'>Curriculums</Link></li>
      </ul>
    </nav>
    <Switch>
      <Route exact="exact" path='/' component={Home}/>
      <Route path='/holberton' component={Holberton}/>
      <Route path='/school' component={School}/>
      <Route path='/curriculums' component={Curriculums}/>
    </Switch>
  </header>
)

export default Header
