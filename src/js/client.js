import { combineReducers, createStore } from "redux";
import userReducer  from './reducers/userReducer.js';
import tweetsReducer from './reducers/tweetsReducer.js';

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
})

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Will"})
store.dispatch({type: "CHANGE_AGE", payload: 35})
store.dispatch({type: "CHANGE_MESSAGE", payload: 'love it'})
