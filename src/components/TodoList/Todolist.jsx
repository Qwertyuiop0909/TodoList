import { useTodosContext } from '../ContextProvider/ContextProvider'
import Todo from '../Todo/Todo'
import styles from './todolist.module.css'

function TodoList() {
  const { Todos } = useTodosContext()
  console.log(Todos)
  return (
    <div className={styles.list}>
      {
        (!Todos.length) ? <span>Todo list is empty...</span>
          : Todos.map((elem, i) => <Todo key={elem.id} number={i + 1} todoinfo={elem} />)
      }
    </div>
  )
}

export default TodoList
