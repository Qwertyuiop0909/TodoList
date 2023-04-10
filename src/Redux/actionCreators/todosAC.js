import {
  ADD_TODO, CHANGE_TODO, CLEAR_TODOS, DELETE_TODO,
} from '../types/todosTypes'

export const addTodoAC = (title) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    status: false,
    title,
  },
})

export const changeTodoAC = (id) => ({
  type: CHANGE_TODO,
  payload: id,
})

export const deleteTodoAC = (id) => ({
  type: DELETE_TODO,
  payload: id,
})

export const clearTodosAC = () => ({
  type: CLEAR_TODOS,
})
