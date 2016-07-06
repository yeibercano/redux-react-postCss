import * as types from '../constants/ActionTypes'

export default function appState (state = { list:[] }, action) {
	console.log('state in reducer', state.list[0])
  switch (action.type) {
    case types.RECEIVE_PHOTOS: {
      state = { ...state, 
          list: action.payload }
    }
    case types.UP_VOTE: 
      if (state.list[0] === action.id) {
      	console.log('hola')
	      return Object.assign({}, state.list[0], {
	        vote: state.list[0]++
	      })
      }

    default:
      return state;
  }
}