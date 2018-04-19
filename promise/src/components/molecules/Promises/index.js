import React, { PropTypes } from 'react'
// import {login} from "../../../auth/auth";
import {connect} from 'react-redux'
// import {Redirect} from 'react-router-dom'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Promise from '../../../components/atoms/Promise'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

export const Promises = ({promiselist})=>{
  console.log("mol/promises")
  console.log(promiselist)
  return (
    <Wrapper>
      잡은 약속:
    <ul>

      {promiselist.promises_as_inviter.map((promise)=>
        <li>Promise ID: {promise}</li>
      )}
    </ul>잡힌 약속:<ul>
      {promiselist.promises_as_invitee.map((promise)=>
          <li>Promise ID: {promise}</li>
        )}
    </ul>
    </Wrapper>
  )
}
Promises.propTypes = {
  promiselist: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    sinceWhen: PropTypes.any.isRequired,
    tilWhen: PropTypes.any.isRequired,
    user1: PropTypes.string.isRequired,
    user2: PropTypes.string.isRequired
  })),
};


export default Promises
