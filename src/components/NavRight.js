import React, { Component } from 'react'
import RightList from './LeftList'

export class NavRight extends Component {
  render() {
    const links = [
      { name: 'Follow us on Twitter', class: 'follow' },
      { name: 'Back to GitHub.com', class: 'git' },
    ]

    return (
      <>
        {links.map(link => {
          return <RightList linkName={link.name} linkClass={link.class} />
        })}
      </>
    )
  }
}

export default NavRight
