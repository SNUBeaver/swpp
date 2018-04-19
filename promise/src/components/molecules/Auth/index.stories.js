import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Auth } from 'components'

storiesOf('Auth', module)
  .add('default', () => (
    <Auth>Hello</Auth>
  ))
  .add('reverse', () => (
    <Auth reverse>Hello</Auth>
  ))
