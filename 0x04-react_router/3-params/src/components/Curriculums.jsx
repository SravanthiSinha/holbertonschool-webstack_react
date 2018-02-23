import React from 'react'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Year from './Year.jsx'

// The Curriculum creates links that can be used to navigate
// between curriculum routes.
const Curriculum = () => (
<nav>
  <ul>
    <li>
      <Link to='/curriculums/year_1'>year_1</Link>
    </li>
    <li>
      <Link to='/curriculums/year_2'>year_2</Link>
    </li>
    <li>
      <Link to='/curriculums/year_3'>year_3</Link>
    </li>
    <li>
      <Link to='/curriculums/year_4'>year_4</Link>
    </li>
  </ul>

  <Switch>
    <Route path='/curriculums/year_:curriculum_id' component={Year}/>
  </Switch>
</nav>)

export default Curriculum
