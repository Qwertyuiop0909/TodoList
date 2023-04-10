/* eslint-disable default-param-last */
import { CLEAR_COUNTER, DECREMENT, INCREMENT } from '../../types/counterTypes'

export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    case CLEAR_COUNTER:
      return 0
    default:
      return state
  }
}
