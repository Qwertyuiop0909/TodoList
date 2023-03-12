import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function useTodos() {
  const [Todos, setTodos] = useState([])

  function addNewTodo(title) {
    const newTodo = {
      id: uuidv4(),
      title,
    }
    console.log(Todos)
    setTodos((prev) => [...prev, newTodo])
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((elem) => elem.id !== id))
  }

  function clearAllTodos() {
    setTodos([])
  }

  return {
    Todos,
    addNewTodo,
    deleteTodo,
    clearAllTodos,
  }
}

// useEffect(() => {
//     let k = 1
//     console.log(Todos)
//     while (typeof (localStorage.getItem(`${k}`)) === 'string') {
//       const txt = localStorage.getItem(k)
//       addNewTodo(txt)
//       k += 1
//       console.log(k)
//     }
//     return (() => {
//       k = 1
//       while (k !== Todos.length + 1) {
//         localStorage.setItem(k, Todos[k])
//         k += 1
//       }
//     })
//   }, [])
