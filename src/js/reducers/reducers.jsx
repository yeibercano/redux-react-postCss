import { combineReducers } from 'redux';

import { userReducer } from './userReducer.js';
import { tweetsReducer } from './tweetsReducer.js';

export const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
})
