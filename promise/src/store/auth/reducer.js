import {initialState} from './selectors'
import {FAIL_LOGIN} from './actions'

const auth_reducer = (state= initialState, action) => {
  switch (action.type) {
    case FAIL_LOGIN:
      return{
        userId: '',
        username: '',
        password: '',
        isLogin: false,
        errorMessage: action.errorMessage
      }
    default:
      return state
  }
}
export default auth_reducer
