import React from 'react'
import {Link} from 'react-router-dom'

import './ShopItem.scss'

class ShopItem extends React.Component {
  render() {
    const {id, name, price, url} = this.props
    return(
      <li className="ShopItem">
        <Link to={`/shop/${id}`}>
          <img alt={name} src={url} />
        </Link>
        <div className="itemInfo">
          <strong>{name}</strong>
          <span>{price+'원'}</span>
        </div>
      </li>
    )
  }
}

export default ShopItem