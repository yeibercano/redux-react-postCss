import React from 'react'
import { connect } from 'react-redux'
import { getChangeName, getChangeAge } from '../actions'

let ChangeName = ({ dispatch }) => {
  let input

  return (
    <main className="container">
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
    </main>
  )
}
ChangeName = connect()(ChangeName)

export default ChangeName