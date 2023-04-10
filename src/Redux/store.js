import { createStore } from 'redux'
import { getInitialState, STORE_LS } from './initState'
import { rootReducer } from './reducers/rootReducer'

export const store = createStore(rootReducer, getInitialState())

store.subscribe(() => {
  localStorage.setItem(STORE_LS, JSON.stringify(store.getState()))
})
