import React, { Component, Fragment } from 'react'

import Button from '../../Button'
import AnchorLink from '../../AnchorLink'
import { connect } from 'react-redux'
import { logout_user } from '../../../actions'

class AccountLinks extends Component {
  render() {
    const { logout_user, username, isLoggedIn } = this.props
    return (
      <Fragment>
        {isLoggedIn ? (
          <Button onClick={logout_user} secondary>
            Logout {username}
          </Button>
        ) : (
          <AnchorLink to="/login" showAsButton>
            Login
          </AnchorLink>
        )}
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  username: state.account.username,
  isLoggedIn: state.account.isLoggedIn,
})

const mapDispatchToProps = {
  logout_user,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountLinks)
