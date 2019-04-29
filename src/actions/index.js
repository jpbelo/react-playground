const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

export const login_user = username => ({
  type: LOGIN_USER,
  payload: {
    username,
  }
})

export const logout_user = () => ({
  type: LOGOUT_USER,
})
