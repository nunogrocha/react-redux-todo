const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    case 'REMOVE_TODO':
      if (state.id !== action.id) {
        return true
      } else {
        return false
      }
    case 'UP_FOR_EDIT_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        upForEdit: true
      })
    case 'EDIT_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        upForEdit: false,
        text: action.text
      })
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'REMOVE_TODO':
      return state.filter(t =>
        todo(t, action)
      )
    case 'UP_FOR_EDIT_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'EDIT_TODO':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos