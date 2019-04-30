import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'styled-system'

const StyledParagraph = styled.p`
  ${fontSize}
  color: ${props => props.theme.colors.grey.main};
  display: block;
`

export const P = props => (
  <StyledParagraph
    fontSize={[1, 2]}
  >
    {props.children}
  </StyledParagraph>
)

export const Quote = styled.p`
  font-size: 12px;
  font-style: italic;
`
