const accountIS = {
  username: null,
  isLoggedIn: false,
}

const account = (state = accountIS, { type, payload }) => {
  switch (type) {
    case 'LOGIN_USER':
      return {
        ...state,
        username: payload.username,
        isLoggedIn: true
      }
    case 'LOGOUT_USER':
      return {
        ...state,
        username: null,
        isLoggedIn: false,
      }
    default:
      return state
  }
}

export default account
