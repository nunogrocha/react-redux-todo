import React from 'react'
import { connect } from 'react-redux'
import { editTodo } from '../actions/action'

let EditTodo = ({ id, text, dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(editTodo(id, input.value))
      }}>
        <input 
          ref={node => {
            input = node
          }} 
          defaultValue={text}
        />
        <button type="submit">
          Edit Todo
        </button>
      </form>
    </div>
  )
}
EditTodo = connect()(EditTodo)

export default EditTodo