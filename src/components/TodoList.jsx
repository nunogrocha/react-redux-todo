import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, onTodoRemove, onUpForEdit }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        id={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onClickRemove={() => onTodoRemove(todo.id)}
        onUpForEdit={() => onUpForEdit(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoRemove: PropTypes.func.isRequired,
  onUpForEdit: PropTypes.func.isRequired
}

export default TodoList