import React, { Component } from 'react'

import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3'

export default class Recaptcha extends Component {
  render() {
    return (
      <GoogleReCaptchaProvider reCaptchaKey="6LfB0KAUAAAAAFzxM6mBG_Gu7LayUgT1wSK3PO2B">
        <GoogleReCaptcha onVerify={token => console.log(token)} />
      </GoogleReCaptchaProvider>
    )
  }
}
