import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Promise } from 'components'

storiesOf('Promise', module)
  .add('default', () => (
    <Promise>Hello</Promise>
  ))
  .add('reverse', () => (
    <Promise reverse>Hello</Promise>
  ))
