import React, { Component } from 'react'

export class RightList extends Component {
  render() {
    return (
      <li>
        <a class={this.props.linkClass} href="">
          {this.props.linkName}
        </a>
      </li>
    )
  }
}

export default RightList
