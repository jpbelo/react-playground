import React, { Fragment } from 'react'

class Item extends React.Component {
  render() {
    return (
      <Fragment>
        <p>Name: {this.props.name}<br/>
        Height: {this.props.height}<br/>
        Hair color: {this.props.hair_color}</p>
      </Fragment>
    )
  }
}

export default Item
