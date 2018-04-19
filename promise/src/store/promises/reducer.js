import {initialState} from './selectors'
import {LISTPROMISE} from './actions'

const promises_reducer = (state = initialState, action) => {
  switch(action.type) {
    case LISTPROMISE:
      // console.log("at store/promise/reducer")
      return {
        promiselist: action.promiselist
      };
    default:
      return state
  }
};

export default promises_reducer
