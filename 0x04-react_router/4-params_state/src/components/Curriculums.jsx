import React from 'react'
import {Link} from 'react-router-dom'
import {Switch, Route} from 'react-router-dom'
import Year from './Year.jsx'
import {connect} from 'react-redux';

// The Curriculum creates links that can be used to navigate
// between curriculum routes.
class Curriculum extends React.Component {
  render() {
    return (<div>
      <nav>
        <ul>
          {
            this.props.curriculums.map(function(curriculum) {
              return <li key={curriculum.id}><Link to={"/curriculums/"+curriculum.id}>{curriculum.name}</Link></li>
            })
          }
        </ul>
        <Switch>
          <Route path='/curriculums/:curriculum_id' component={Year}/>
        </Switch>
      </nav>
    </div>);
  }
}

function mapStateToProps(state) {
  return ({curriculums: state.curriculums})
}

export default connect(mapStateToProps, null)(Curriculum);
