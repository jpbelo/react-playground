import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.div`
  width: 120px;
  font-size: 16px;
  & > ul {
    background-color: #f2f2f2;
    box-shadow: 0 0 0 0 #fff, 0 0 5px 5px #f2f2f2;
    width: 120px;
    height: calc(100vh - 220px);
  	position: fixed;
    display: block;
    & > li {
      & > a {
        padding: 10px;
        display: inline-block;
        color: black; 
      }
    }
  }
`

class Header extends Component {
  render() {
    return (
      <header>
        <Navigation>
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
        </Navigation>
      </header>
    )
  }
}

export default Header
