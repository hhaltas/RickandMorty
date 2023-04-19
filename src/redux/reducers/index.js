import {combineReducers} from 'redux';
import characterReducers from './characterReducers';
import episodeReducer from './episodeReducers';
import favoriesReducers from './favoriesReducers';

export default combineReducers({
  episodes: episodeReducer,
  characters: characterReducers,
  favories: favoriesReducers,
});
