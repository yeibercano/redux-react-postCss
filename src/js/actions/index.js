import * as types from '../constants/ActionTypes'
import axios from 'axios';

export function receivePhotos (payload) {
  return {
    type: types.RECEIVE_PHOTOS,
    payload
  }
}

export function getPhotos() {
  return dispatch => {
    axios.get("/photos")
    .then( response => dispatch(receivePhotos(response.data.data)));
  }
}
export function upVote (payload) {
  return {
    type: types.UP_VOTE,
    payload
  }
}