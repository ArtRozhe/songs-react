import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Songs from '../components/Songs';
import * as songsActions from '../actions/SongsActions';

class App extends Component {

  render() {
    const { getSongs, NextSongs } = this.props.songsActions;
    const { list, fetching, pagination, currentList } = this.props.songs;
    return (
      <div>
        <Songs currentList={ currentList } pagination={ pagination } list={ list } fetching={ fetching } getSongs={ getSongs } NextSongs={ NextSongs } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    songs: state.songs
  }
}

function mapDispatchToProps(dispatch) {
  return {
    songsActions: bindActionCreators(songsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

