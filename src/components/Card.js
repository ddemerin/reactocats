import React, { Component } from 'react'

export class Card extends Component {
  render() {
    return (
      <div>
        <li class="kittehs">
          <img src={this.props.imageUrl} alt={this.props.catName} />
        </li>
        <p>
          #{this.props.catNumber}: <span>{this.props.catName}</span>
          <object>
            <img src={this.props.iconUrl} class="icon" alt="author" />
          </object>
        </p>
      </div>
    )
  }
}

export default Card
