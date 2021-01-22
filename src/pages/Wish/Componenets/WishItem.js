import React, { Component } from 'react'
import xMark from '../../../images/OptionBox/x-mark.png'
import './WishItem.scss'

class WishItem extends Component {
  render() {
    const {id, name, price, url, hoverImg, isHovered, deleteWish} = this.props;
    console.log(isHovered)
    return(
      <div id={id} onMouseOver={hoverImg} className="WishItem">
        <img alt={name} src={url} />
        <div className="content">
          <p className="itemName">{name}</p>
          <p className="itemPrice">{price}</p>
        </div>
        <button onClick={() => deleteWish(id)} type="button">
          <img alt="deleteItem" src={xMark} />
        </button>
      </div>
    )
  }
}

export default WishItem