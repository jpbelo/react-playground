import React, { Component } from 'react'

import { StyledButton } from '../Button'

class SubmitInput extends Component {
  render() {
    return (
      <StyledButton as="button" {...this.props}>
        {this.props.children}
      </StyledButton>
    )
  }
}

export default SubmitInput
