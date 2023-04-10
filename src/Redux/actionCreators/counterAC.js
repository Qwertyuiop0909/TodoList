import { DECREMENT, INCREMENT } from '../types/counterTypes'

export const incrementAC = () => ({
  type: INCREMENT,
})

export const dencrementAC = () => ({
  type: DECREMENT,
})
