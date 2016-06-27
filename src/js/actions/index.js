import * as types from '../constants/ActionTypes'

export function getChangeName(payload) {
  return {
    type: types.CHANGE_NAME,
    payload: payload
  }
}

export function getChangeAge(payload) {
  return {
    type: types.CHANGE_AGE,
    payload: payload
  }
}

export function getChangeMessage(payload) {
  return {
    type: types.CHANGE_MESSAGE,
    payload: payload
  }
}