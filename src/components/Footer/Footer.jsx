import { useDispatch } from 'react-redux'
import { clearTodosAC } from '../../Redux/actionCreators/todosAC'

export default function Footer() {
  // const { clearAllTodos } = useTodoHelpersContext()
  const dispatch = useDispatch()
  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-dark" onClick={() => dispatch(clearTodosAC())}>Clear</button>
    </div>
  )
}
