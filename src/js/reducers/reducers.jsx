import * as types from '../constants/ActionTypes'

export default function appState (state = { list:[] }, action) {
	console.log('state in reducer', state.list[0])
  switch (action.type) {
    case types.RECEIVE_PHOTOS: {
      state = { ...state, 
          list: action.payload }
    }
    case types.UP_VOTE: 
    console.log('inside reducer upvote')
      return Object.assign({}, state, {
      	list: state.list.map((image) => {
      		console.log('iterating through images')
      		if(image.id === action.id ) {
      			return Object.assign({}, list, {
      				vote: image.vote++
      			})
      		}
      		return image
      	})
      })
    default:
      return state;
  }
}