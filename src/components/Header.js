import React, { Component } from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

import logo from '../images/GitHub-Mark-64px.png'

export class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <img src={logo} class="logo" alt="GitHub Logo" />
          <ul class="left">
            <NavLeft />
          </ul>
          <ul class="right">
            <NavRight />
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
