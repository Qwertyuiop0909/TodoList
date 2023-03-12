import React, { useContext, useMemo } from 'react'
import useTodos from '../../customhooks/useTodos'

const TodoContext = React.createContext()

const TodoHelpersContext = React.createContext()

export default function ContextProvider({ children }) {
  const {
    Todos, addNewTodo, deleteTodo, clearAllTodos,
  } = useTodos()

  const helperTodo = useMemo(() => ({
    addNewTodo,
    deleteTodo,
    clearAllTodos,
  }), [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TodoContext.Provider value={{ Todos }}>
      <TodoHelpersContext.Provider value={helperTodo}>
        {children}
      </TodoHelpersContext.Provider>
    </TodoContext.Provider>
  )
}

export const useTodosContext = () => useContext(TodoContext)
export const useTodoHelpersContext = () => useContext(TodoHelpersContext)
