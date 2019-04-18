import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Card from '.'

const cardOptions = {
  title: 'Card Title',
  description: 'Blah Blah Blah Blah Blah Blah',
}

storiesOf('Components|Card', module)
.add('Primary', () => (
  <Fragment>
    <Card {...cardOptions} />
    <br />
    <Card {...cardOptions} secondary />
  </Fragment>
))
