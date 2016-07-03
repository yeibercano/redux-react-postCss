// import { combineReducers } from 'redux';
// import userReducer from './userReducer';
// import tweetsReducer from './tweetsReducer';

//  const reducers = combineReducers({
//   user: userReducer,
//   tweets: tweetsReducer
// })

// export default reducers

export const reducers = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME": {
      state = {...state, name: action.payload}
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload}
      break;
    }
  }
  return state;
};