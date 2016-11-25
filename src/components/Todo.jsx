import React, { PropTypes } from 'react'
import RemoveButton from './RemoveButton'
import EditButton from './EditButton'
import EditTodo from '../containers/EditTodo'

const Todo = ({ onUpForEdit, onClickRemove, onClick, completed, text, id, upForEdit }) => (
  <div>
  {(upForEdit
    ? <li>
        <EditTodo
          id={id}
          text={text}
        />  
      </li>   
    : <li
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
      >
        <label onClick={onClick}>
          {text} 
        </label>
        <RemoveButton onClickRemove={onClickRemove} />
        <EditButton onUpForEdit={() => onUpForEdit(id)} />
      </li> 
  )}
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  onUpForEdit: PropTypes.func.isRequired,
  onClickRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo