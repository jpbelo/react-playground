import React from 'react'
import { storiesOf } from '@storybook/react'
import Card from '.'

const cardOptions = {
  title: 'Primary card',
  description: 'Card text - sizes [1, 2/3, 1/2, 1/3]',
  width: [1, 2/3, 1/2, 1/3],
}
const secondaryCardOptions = {
  title: 'Secondary',
  description: 'Secondary card',
  secondary: true,
  width: [1, 2/3, 1/2, 1/3],
}

storiesOf('Components|Card', module)
.add('Primary', () => (
  <Card {...cardOptions} />
))
.add('Secondary', () => (
  <Card {...secondaryCardOptions} />
))
