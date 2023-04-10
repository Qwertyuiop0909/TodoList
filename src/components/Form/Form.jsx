import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodoAC } from '../../Redux/actionCreators/todosAC'

function Form() {
  const [input, setInput] = useState('')
  // const { addNewTodo } = useTodoHelpersContext()
  const dispatch = useDispatch()
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      dispatch(addTodoAC(input))
    }}
    >
      <div className="input-group mt-3 mb-2">
        <input
          value={input}
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-primary"
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default Form
