// import { createStore } from 'redux';
import { combineReducers } from 'redux';
import steem from './modules/steem';

export default combineReducers({
  steem,
});