import React, { Component } from 'react'
import './WishItem.scss'

class WishItem extends Component {
  render() {
    const {id, name, price, url} = this.props;

    return(
      <div className="WishItem">
        <img alt={name} src={url} />
        <p className="itemName">{name}</p>
        <p className="itemPrice">{price}</p>
      </div>
    )
  }
}

export default WishItem