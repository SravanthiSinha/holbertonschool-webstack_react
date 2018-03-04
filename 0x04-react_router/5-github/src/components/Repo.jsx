import React from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchCommits} from '../actions/Actions.jsx';
import {Link} from 'react-router-dom'
import Loader from './Loader.jsx';

class Repo extends React.Component {
  constructor(props) {
    super(props)
    this._reponame = ""
  }
  componentDidMount() {
    this._reponame = this.props.match.params.repo;
    this.props.fetchCommits(this._reponame)
  }
  render() {
    if (!this.props.is_fetching) {
      var commits = [];
      for (var key in this.props.commits) {
        commits.push(<li key={key}>
          <b>{this.props.commits[key].sha}</b>: {this.props.commits[key].commit.message}&nbsp;by&nbsp;
          <b>{this.props.commits[key].commit.author.name}</b>&nbsp; (<em>{this.props.commits[key].commit.author.date}</em>)
        </li>)
      }
      if (commits.length != 0)
        return (<div>
          <Link to="/">Back</Link>
          <h1>Commits of {this._reponame}:</h1>
          <ul>{commits}</ul>
        </div>)
      else {
        return (<div>
          <Link to="/">Back</Link>
          <h1>Nothing</h1>
        </div>)
      }
    } else {
      return (<Loader is_loading={this.props.is_fetching}/>)
    }
  }
}
function mapStateToProps(state) {
  return {is_fetching: state.is_fetching_commits, commits: state.commits}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCommits
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Repo)
