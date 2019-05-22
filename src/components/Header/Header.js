import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../assets/images/logo.svg'
import { AccountLinks } from '../AccountForms'

const Navigation = styled.div`
  background-color: #f2f2f2;
  box-shadow: 0 0 0 0 #fff, 0 0 5px 5px #f2f2f2;
  width: 120px;
  height: calc(100vh - 220px);
  position: fixed;
  display: block;
  font-size: 16px;
  padding: 10px;
  & > img {
    width: 50px;
  }
  & > ul {
    & > li {
      & > a {
        display: inline-block;
        color: black;
        padding: 10px 0;
      }
    }
  }
`

class Header extends Component {
  render() {
    return (
      <header>
        <Navigation>
          <img src={logo} alt="Logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/load-stuff">Load Stuff</Link>
            </li>
            <li>
              <Link to="/registration">Registration</Link>
            </li>
          </ul>
          <AccountLinks />
        </Navigation>
      </header>
    )
  }
}

export default Header
