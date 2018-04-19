import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../../components/atoms/Button'
import User from "../../atoms/User"
// import {Redirect} from 'react-router-dom'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const Auth =  ({user, act_login, act_logout}) => {
  let username, password;
  const loginBT = () => {
    act_login(username.value, password.value);
    // change state
  };
  const logoutBT = () => {
    act_logout();
    // change state
  };
  return (
    user.isLogin?
    <Wrapper>
      <User username={user.username} password={user.password} />
      <Button type="submit" onClick={logoutBT}>Logout</Button>
    </Wrapper>
      :
    <Wrapper>
      id:
      <input ref={node => {username = node;}} />
      password:
      <input ref={node => {password = node;}} />
      <p>{user.errorMessage}</p>
      <Button type="submit" onClick={loginBT}>Login</Button>
    </Wrapper>
  );
};

Auth.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLogin: PropTypes.any.isRequired,
  errorMessage: PropTypes.string
}

Auth.defaultProps = {
  username: '',
  password: '',
  isLogin: false,
  errorMessage: ''
}
export default Auth
