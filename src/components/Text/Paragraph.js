import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'styled-system'

const StyledParagraph = styled.p`
  ${fontSize}
  color: ${props => props.theme.colors.grey.main};
`

export const P = props => <StyledParagraph fontSize={[1, 2]}>{props.children}</StyledParagraph>

export const Quote = props => (
  <StyledParagraph fontSize={[1, 2]} style={{ fontStyle: 'italic' }}>
    {props.children}
  </StyledParagraph>
)

export const Small = props => (
  <StyledParagraph fontSize={[0, 1]} as="small">
    {props.children}
  </StyledParagraph>
)
