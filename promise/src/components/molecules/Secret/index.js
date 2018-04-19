import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../../components/atoms/Button'
import User from '../../../components/atoms/User'


const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`
export const Secret = ({state, users, addPromise})=>{
  let sinceWhen, tilWhen, user2;
  const onSubmit = () => {
    addPromise(sinceWhen.value, tilWhen.value, user2.value);
  };
  return(
    <Wrapper>
    <h1>NEW</h1>
    sinceWhen:
    <input ref={node => {sinceWhen = node;}} type="datetime-local" />
    tilWhen:
    <input ref={node => {tilWhen = node;}} type="datetime-local" />
    user2:
    <select ref={node => user2=node}>
      {users.map((user, i) => (
        <option value={user.id}>{user.username}</option>
      ))}
    </select>
    <Button type="submit" onClick={onSubmit}>Add</Button>
    </Wrapper>
  )
}


export default Secret
