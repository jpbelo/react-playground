import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  display: flex;
  justify-content: space-between;
  & > div {
    border: 1px dashed #ccc;
    width: calc(100% - 150px);
    overflow: scroll;
    & > div {
      width: 100%;
    }
  }
`

class Layout extends Component {
  render() {
    return <Container>{this.props.children}</Container>
  }
}

export default Layout
