import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { TextInput, SelectInput } from '.'
import { textMock, selectMockA, selectMockB } from './mockdata'

storiesOf('Components|Inputs', module)
.add('Text', () => (
  <Fragment>
    <TextInput />
    <TextInput inputProps={textMock} />
  </Fragment>
))
.add('Select', () => (
  <Fragment>
    <SelectInput inputProps={selectMockA} />
    <SelectInput inputProps={selectMockB} />
  </Fragment>
))
