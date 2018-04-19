import React from 'react'
import Auth from '../components/molecules/Auth'
import {connect} from "react-redux"
import {login, logout} from '../store/auth/actions'

const mapStateToProps = (state) => {
    return {
      user: state.user,
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    act_login: (username, password) => {
      // console.log("username password", username, password)
      dispatch(login(username, password))
    },
    act_logout: () => {
      dispatch(logout())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
