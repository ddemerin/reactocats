import React, { Component } from 'react'
import LeftList from './LeftList'

export class NavLeft extends Component {
  render() {
    const links = [
      { name: 'Octodex', class: 'octo' },
      { name: 'Home', class: 'home' },
      { name: 'FAQ', class: 'faq' },
    ]

    return (
      <>
        {links.map(link => {
          return <LeftList linkName={link.name} linkClass={link.class} />
        })}
      </>
    )
  }
}

export default NavLeft
