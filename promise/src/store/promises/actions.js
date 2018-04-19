
export const POST_PROMISE_REQUEST = 'POST_PROMISE_REQUEST';
export const LISTPROMISE = 'LISTPROMISE';

export const listPromise = (promiseList) => {
  return {
    type : LISTPROMISE,
    promiselist:promiseList
    
  }
}

export const postPromiseRequest = (sinceWhen, tilWhen, user2) => {
  console.log(user2);
  return {
    type: POST_PROMISE_REQUEST,
    sinceWhen,
    tilWhen,
    user2
  }
};
