import { combineReducers } from 'redux';
import page from './page';
import user from './user';
import songs from './songs';

export default combineReducers({
  page,
  user,
  songs
});
