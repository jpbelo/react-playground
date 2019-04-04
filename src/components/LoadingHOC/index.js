import React from 'react'
import './styles.css'

const LoadingHOC = WrappedComponent => {
  return class LoadingHOC extends React.Component {
    render() {
      return this.props.isLoading ? <p>Loading</p> : <WrappedComponent {...this.props} />
    }
  }
}

export default LoadingHOC
