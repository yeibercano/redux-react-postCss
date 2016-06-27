import { reducers } from './reducers/reducers.js';
import { createStore } from "redux";

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: "CHANGE_NAME", payload: "Will"})
store.dispatch({type: "CHANGE_AGE", payload: 38})
store.dispatch({type: "CHANGE_MESSAGE", payload: 'love it'})
