/* eslint-disable no-shadow */
import { useDispatch, useSelector } from 'react-redux'
import { changeTodoAC, deleteTodoAC } from '../../Redux/actionCreators/todosAC'
import styles from './todo.module.css'

function Todo({ number, todoId }) {
  // const [isDisabled, setIsDisabled] = useState(false)
  // const { deleteTodo } = useTodoHelpersContext()
  const dispatch = useDispatch()
  const store = useSelector((store) => store.todos.find((elem) => elem.id === todoId))
  console.log(store)
  return (
    <div key={store.id} className={`card ${styles.todo}`}>
      <div className={`card-body ${store.status ? styles.disabled : ''}`}>
        {`${number}. ${store.title}`}
      </div>
      <div className={styles.cardbuttons}>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(changeTodoAC(store.id))}
        >
          {store.status ? 'Undo' : 'Done'}
        </button>
        <button type="button" className="btn btn-danger" onClick={() => dispatch(deleteTodoAC(store.id))}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Todo
