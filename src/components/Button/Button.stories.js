import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Components|Button', module)
  .add('Primary', () => (
    <Button width={[1, 1 / 2, 1 / 3]} fontSize={[2, 3, 4]}>
      Button
    </Button>
  ))
  .add('Secondary', () => <Button secondary>Secondary Button</Button>)
  .add('Disabled', () => <Button disabled>Disabled Button</Button>)
  .add('Mix', () => (
    <Fragment>
      <Button color="#fff">Primary Button with white text color</Button>
      <Button secondary color="primary.dark">
        Secondary Button with primary text color
      </Button>
    </Fragment>
  ))
