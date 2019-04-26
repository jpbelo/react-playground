import React from 'react'
import { storiesOf } from '@storybook/react'
import AnchorLink from '.'

storiesOf('Components|AnchorLink', module)
.add('Primary', () => (
  <AnchorLink to="#" width={[1, 1/2, 1/3]}>
    AnchorLink
  </AnchorLink>
))
.add('Secondary', () => (
  <AnchorLink to="#" secondary>
    AnchorLink secondary
  </AnchorLink>
))
.add('showAsButton', () => (
  <AnchorLink to="#" showAsButton>
    AnchorLink showAsButton
  </AnchorLink>
))
.add('showAsButton Secondary', () => (
  <AnchorLink to="#" showAsButton secondary>
    AnchorLink showAsButton secondary
  </AnchorLink>
))
