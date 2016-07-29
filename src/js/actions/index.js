import * as types from '../constants/ActionTypes'
import axios from 'axios';

export function getPhotos() {
  console.log('inside get hptos')
  return dispatch => {
    axios.get("/api/images.json")
    .then( response => dispatch({ type: types.RECEIVE_PHOTOS, payload: response.data.data }));
  }
}
export function upVote(id) {
  return {
    type: types.UP_VOTE,
    payload: id
  }
}