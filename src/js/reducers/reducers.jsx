import * as types from '../constants/ActionTypes'

export default function appState(state = { list:[] }, action) {
  switch (action.type) {
    case types.RECEIVE_PHOTOS: 
    return  { ...state, 
          list: action.payload }
    case types.UP_VOTE: 
      return {...state, list: state.list.map(function(img){
        if(img.id === action.payload){
           img.fileattributes.vote++
        }
        return img
      })}
    default:
      return state;
  }
}
