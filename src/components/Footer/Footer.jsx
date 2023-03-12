import { useTodoHelpersContext } from '../ContextProvider/ContextProvider'

export default function Footer() {
  const { clearAllTodos } = useTodoHelpersContext()
  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="btn btn-dark" onClick={() => clearAllTodos()}>Dark</button>
    </div>
  )
}
