import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from '.'

storiesOf('Components|Button', module)
.add('Primary', () => (
  <Button primary>
    Text inside Button Component
  </Button>
))
.add('Secondary', () => (
  <Button secondary>
    👾 Secondary Button 🦄
  </Button>
))
