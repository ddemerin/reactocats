import React, { Component } from 'react'

export class LeftList extends Component {
  render() {
    return (
      <li>
        <a class={this.props.linkClass}>{this.props.linkName}</a>
      </li>
    )
  }
}

export default LeftList
