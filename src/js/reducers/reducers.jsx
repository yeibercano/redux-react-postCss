import * as types from '../constants/ActionTypes'

export default function appState (state = { list:[] }, action) {
  switch (action.type) {
    case types.RECEIVE_PHOTOS: {
      state = { ...state, 
          list: action.payload }
    }
    default:
      return state;
  }
}