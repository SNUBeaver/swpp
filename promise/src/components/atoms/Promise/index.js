import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'


// const Promise = styled.span`
//   font-family: ${font('primary')};
//   color: ${palette({ grayscale: 0 }, 1)};
// `
const Promise = ({sinceWhen, tilWhen, user1, user2}) => (
  <li>sinceWhen: {sinceWhen} tilWhen: {tilWhen} user1: {user1} user2: {user2}</li>
);


Promise.propTypes = {
  sinceWhen: PropTypes.instanceOf(Date).isRequired,
  tilWhen: PropTypes.instanceOf(Date).isRequired,
  user1: PropTypes.string.isRequired,
  user2: PropTypes.string.isRequired,
}

Promise.defaultProps = {
  palette: 'grayscale',
}

export default Promise
