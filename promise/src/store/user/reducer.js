import {initialState} from './selectors'
import {SUCCESS_USER, LIST_USER} from './actions'

const user_reducer = (state= initialState, action) => {
  switch (action.type) {
    case SUCCESS_USER:
      // console.log("at reducter");
      return{
        ...state,
        userId: action.userId,
        username: action.username,
        password: action.password,
        isLogin: true,
        errorMessage:''
      };
    case LIST_USER:
      // console.log("at reducer")
      // console.log(action)
      return {
        ...state,
        users: action.user
      };
    default:
      return state;

  }
}
export default user_reducer
