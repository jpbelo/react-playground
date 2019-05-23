import React from 'react'
import styled from 'styled-components'
import { fontSize } from 'styled-system'

const StyledHeading = styled.h1`
  ${fontSize}
  color: ${props => props.theme.colors.grey.main};
`

export const H1 = props => <StyledHeading fontSize={[3, 4]}>{props.children}</StyledHeading>

export const H2 = props => (
  <StyledHeading as="h2" fontSize={[2, 3]}>
    {props.children}
  </StyledHeading>
)

export const H3 = props => (
  <StyledHeading as="h3" fontSize={[2]}>
    {props.children}
  </StyledHeading>
)

export const H4 = props => (
  <StyledHeading as="h4" fontSize={[1]}>
    {props.children}
  </StyledHeading>
)
