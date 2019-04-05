import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigation = styled.div`
  width: 100%;
  font-size: 16px;
  margin-bottom: 40px;
  & > ul {
    display: flex;
    justify-content: space-between;
    & > li {
      & > a {
        padding: 10px;
        display: inline-block;
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
