import React from 'react'

import './ShopItem.scss'

class ShopItem extends React.Component {
  render() {
    const {id, name, price, url} = this.props
    return(
      <li className="ShopItem">
        <img alt={name} src={url} />
        <div className="itemInfo">
          <strong>{name}</strong>
          <span>{price+'원'}</span>
        </div>
      </li>
    )
  }
}

export default ShopItem