import './App.css'
import ContextProvider from './components/ContextProvider/ContextProvider'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import TodoList from './components/TodoList/Todolist'

function App() {
  return (
    <div className="App app">
      <ContextProvider>
        <Header />
        <hr />
        <TodoList />
        <hr />
        <Footer />
      </ContextProvider>
    </div>
  )
}

export default App
