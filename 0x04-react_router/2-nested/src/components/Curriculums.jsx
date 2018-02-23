import React from 'react'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'


import Year1 from './curriculums/Year1.jsx'
import Year2 from './curriculums/Year2.jsx'
// The Curriculum creates links that can be used to navigate
// between curriculum routes.
const Curriculum = () => (
<nav>
  <ul>
    <li>
      <Link to='/curriculums/year_1'>Year1</Link>
    </li>
    <li>
      <Link to='/curriculums/year_2'>Year2</Link>
    </li>
  </ul>

  <Switch>
    <Route path='/curriculums/year_1' component={Year1}/>
    <Route path='/curriculums/year_2' component={Year2}/>
  </Switch>
</nav>)

export default Curriculum
