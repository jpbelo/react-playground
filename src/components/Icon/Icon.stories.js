import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Components|Icons', module)
.add('Primary', () => (
  <Fragment>
    <Icon name="user" color="#fff111" />
    <Icon name="alert" />
  </Fragment>
))
