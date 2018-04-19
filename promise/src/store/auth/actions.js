export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const FAIL_LOGIN = 'FAIL_LOGIN'
export const SUCCESS_LOGOUT = 'SUCCESS_LOGOUT'

export const login = (username,password) => {
  console.log("action username, password", username, password)
  return{
    type : 'LOGIN',
    username,
    password
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT',
  }
}

export const failLogin = (err) => {
  return {
    type: 'FAIL_LOGIN',
    errorMessage: err
  }
}

export const successLogout = (error) => {
  return{
    type: 'SUCCESS_LOGOUT'
  }
}
