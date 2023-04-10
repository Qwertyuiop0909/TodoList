/* eslint-disable default-param-last */
import {
  ADD_TODO, CHANGE_TODO, CLEAR_TODOS, DELETE_TODO,
} from '../../types/todosTypes'

export const todosReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state]

    case CHANGE_TODO:
      return state.map((elem) => {
        if (elem.id === action.payload) {
          return {
            ...elem,
            status: !elem.status,
          }
        }
        return elem
      })

    case DELETE_TODO:
      return state.filter((elem) => elem.id !== action.payload)

    case CLEAR_TODOS:
      return []

    default:
      return state
  }
}
