import { useSelector } from 'react-redux'
import Todo from '../Todo/Todo'
import styles from './todolist.module.css'

function TodoList() {
  const { todos: Todos } = useSelector((store) => store)
  return (
    <div className={styles.list}>
      {
        (!Todos?.length) ? <span>Todo list is empty...</span>
          : Todos.map((elem, i) => <Todo key={elem.id} number={i + 1} todoId={elem.id} />)
      }
    </div>
  )
}

export default TodoList
