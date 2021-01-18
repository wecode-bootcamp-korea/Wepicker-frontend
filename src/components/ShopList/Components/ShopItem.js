import React from 'react'
import {Link} from 'react-router-dom'

import './ShopItem.scss'

class ShopItem extends React.Component {
  render() {
    const {productId, name, price, thumnailImage} = this.props
    return(
      <li className="ShopItem">
        <Link to={`/shop/${productId}`}>
          <img alt={name} src={thumnailImage} />
        </Link>
        <div className="itemInfo">
          <strong>{name}</strong>
          <span>{parseInt(price)+'원'}</span>
        </div>
      </li>
    )
  }
}

export default ShopItem