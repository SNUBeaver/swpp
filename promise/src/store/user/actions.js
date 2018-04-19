export const SUCCESS_USER = 'SUCCESS_USER'
export const LIST_USER = 'LIST_USER'

export const successUser = (response, {username,password}) =>{
  console.log("at successUser");
  return{
    type: SUCCESS_USER,
    userId: response.id,
    username: username,
    password: password
  }
}

export const listUser = (userList)=>{
  // console.log("list User passsing")
  return{
    type: LIST_USER,
    user: userList
  }
}
//
// .map((user)=>({
//   userId: user.id,
//   username: user.username
// }))
