import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const StyledReduxLog= styled.button`
  position: absolute;
  z-index: 2;
  top: 5px;
  right: 5px;
  width: 180px;
  max-height: calc(100vh - 230px);
  padding: 10px;
  border: 1px solid #222;
  font-size: 10px;
  color: #222;
  text-align: left;
  vertical-align: top;
`

class ReduxLog extends Component {
  render() {
    return (
      <StyledReduxLog>
        <pre>{JSON.stringify(this.props.form, undefined, 2)}</pre>
      </StyledReduxLog>
    )
  }
}

const mapStateToProps = function(state){
  return {
    form: state.form.registration
  }
}

export default connect(mapStateToProps)(ReduxLog)
