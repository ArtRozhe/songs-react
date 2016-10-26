import fetch from 'isomorphic-fetch'

export function getSongs() {
  return (dispatch) => {
    dispatch({
      type: 'GET_SONGS_REQUEST',
      payload: {}
    })

    return fetch('http://artrozhe.github.io/songs.json', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(json => dispatch({
        type: 'GET_SONGS_SUCCESS',
        payload: json
      }))
      .catch((error) => {
        console.log(error);
      });
  }
}

export function NextSongs(pagination, currentList) {
  return {
    type: 'GET_NEXT_SONGS',
    payload: {pagination, currentList}
  }
}
