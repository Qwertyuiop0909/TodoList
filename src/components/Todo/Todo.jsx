import { useState } from 'react'
import { useTodoHelpersContext } from '../ContextProvider/ContextProvider'
import styles from './todo.module.css'

function Todo({ number, todoinfo }) {
  const [isDisabled, setIsDisabled] = useState(false)
  const { deleteTodo } = useTodoHelpersContext()
  return (
    <div key={todoinfo.id} className={`card ${styles.todo}`}>
      <div className={`card-body ${isDisabled ? styles.disabled : ''}`}>
        {`${number}. ${todoinfo.title}`}
      </div>
      <div className={styles.cardbuttons}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => setIsDisabled((prev) => !prev)}
        >
          {isDisabled ? 'Undo' : 'Done'}
        </button>
        <button type="button" className="btn btn-danger" onClick={() => deleteTodo(todoinfo.id)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
