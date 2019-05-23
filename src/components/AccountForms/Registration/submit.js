import { SubmissionError } from 'redux-form'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

function submit(values) {
  return sleep(500).then(() => {
    // simulate server latency
    if (!values.username) {
      throw new SubmissionError({
        username: 'This field is required',
        _error: 'Registration failed!',
      })
    } else {
      window.alert(`Success:\n\n${JSON.stringify(values, null, 2)}`)
    }
  })
}

export default submit
