import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Icon from '.'

storiesOf('Components|Icons', module).add('Primary', () => (
  <Fragment>
    <Icon name="user" size="10" primary />
    <Icon name="alert" size="20" />
  </Fragment>
))
