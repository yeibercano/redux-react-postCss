import React from 'react'
import { connect } from 'react-redux'
import { getChangeName, getChangeAge } from '../actions'

let ChangeName = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(getChangeName(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Change Name
        </button>
      </form>
    </div>
  )
}
ChangeName = connect()(ChangeName)

export default ChangeName