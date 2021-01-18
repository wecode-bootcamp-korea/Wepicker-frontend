import React from 'react'
import {Link} from 'react-router-dom'

import './ShopItem.scss'

class ShopItem extends React.Component {
  render() {
    const { productId, name, price, subImage, thumnailImage } = this.props
    return(
      <li className="ShopItem">
        <Link to={`/product/${productId}`}>
          <img 
          alt={name}
          src={thumnailImage}
          onMouseOver={(evt) => evt.currentTarget.src = subImage}
          onMouseOut={(evt) => evt.currentTarget.src = thumnailImage} />
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