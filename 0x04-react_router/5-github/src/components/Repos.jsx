import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loader from './Loader.jsx';
import {fetchRepos} from '../actions/Actions.jsx';
import {Link} from 'react-router-dom'

class Repos extends React.Component {
  componentDidMount() {
    this.props.fetchRepos()
  }
  render() {
    if (!this.props.is_fetching) {
      var repos = [];
      for (var key in this.props.repos) {
        repos.push(<li key={key}>
          <Link to={"/repo/" + this.props.repos[key].name}>{this.props.repos[key].name}</Link>
        </li>)
      }
      if (repos.length != 0)
        return (<div>
          <h1>Repositories:</h1>
          <ul>{repos}</ul>
        </div>)
    } else {
      return (<Loader is_loading={this.props.is_fetching}/>)
    }
  }
}

const mapStateToProps = state => {
  return {is_fetching: state.is_fetching_repos, repos: state.repos}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRepos
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Repos)
