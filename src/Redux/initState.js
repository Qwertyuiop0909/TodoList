export const STORE_LS = 'STORE_LS'

const initialState = {
  todos: [],
  counter: 0,
}

export const getInitialState = () => {
  const dataFromLS = localStorage.getItem(STORE_LS)
  return dataFromLS ? JSON.parse(dataFromLS) : initialState
}
