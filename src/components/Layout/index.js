import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 250px);
  display: flex;
  justify-content: space-between;
  &>div {
  	border: 1px dashed #ccc;
  	width: calc(100% - 200px);
  }
`

class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          {this.props.children}
        </Container>
      </Fragment>
    )
  }
}

export default Layout
