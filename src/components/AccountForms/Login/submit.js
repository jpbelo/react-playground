import { SubmissionError } from 'redux-form'

import store from '../../../store'
import { login_user } from '../../../actions'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(500).then(() => {
    // simulate server latency
    if (values.username !== 'dev') {
      throw new SubmissionError({
        username: 'User does not exist',
        _error: 'Login failed!',
      })
    } else if (values.password !== 'reduxform') {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!',
      })
    } else {
      store.dispatch(login_user(values.username))
    }
  })
}

export default submit
