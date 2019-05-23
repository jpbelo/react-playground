import React from 'react'
import styled from 'styled-components'

const Character = styled.div`
  border: 1px solid black;
  margin: 20px auto;
`

class Item extends React.Component {
  render() {
    return (
      <Character>
        <p>
          Name: {this.props.name}
          <br />
          Height: {this.props.height}
          <br />
          Hair color: {this.props.hair_color}
        </p>
      </Character>
    )
  }
}

export default Item
