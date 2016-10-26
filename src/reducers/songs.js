const initialState = {
  list: [],
  fetching: false,
  pagination: 0,
  currentList: []
};

export default function page(state = initialState, action) {
  switch (action.type) {
    case 'GET_SONGS_REQUEST':
      return { ...state, list: action.payload, fetching: true }
    case 'GET_SONGS_SUCCESS':
      return { ...state, list: action.payload, fetching: false}
    case 'GET_SONGS_FAILURE':
      return { ...state, list: action.payload, fetching: false}
    case 'GET_NEXT_SONGS':
      return { ...state, pagination: action.payload.pagination, currentList: action.payload.currentList}
    default:
      return state;
  }
}
