import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.div`
  width: 180px;
  font-size: 16px;
  & > ul {
    background-color: #fdfdfd;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1), 0 0 5px 5px rgba(0, 0, 0, 0.2);
    height: calc(100vh - 250px);
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
              <Link to="/list-fetch">List Fetch</Link>
            </li>
            <li>
              <Link to="/lodash-exemples">Lodash</Link>
            </li>
            <li>
              <Link to="/styled-components">Styled Components</Link>
            </li>
          </ul>
        </Navigation>
      </header>
    )
  }
}

export default Header
