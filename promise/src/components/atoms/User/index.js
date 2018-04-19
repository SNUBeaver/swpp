import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

// const User = styled.span`
//   font-family: ${font('primary')};
//   color: ${palette({ grayscale: 0 }, 1)};
// `
const User = ({username, password})=>(
  <li>user: {username}</li>
)

User.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

User.defaultProps = {
  palette: 'grayscale',
}

export default User
