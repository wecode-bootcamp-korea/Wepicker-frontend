import React, { Component } from 'react'

import './CartItem.scss'

class CartItem extends Component {
  render() {
    const {cartList, id, name, options, waysToPickup, delieveryFee} = this.props

    return(
      <tr className="CartItem">
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <div>
            <img alt="pin" src="https://cdn.imweb.me/thumbnail/20200121/70a14fc25723f.jpg" />
          </div>
          <div>
            <p>{name}</p>
            <p>5개 / 2개</p>
          </div>
        </td>
        <td>
          <p>2개</p>
          <button type="button">
            변경
          </button>
        </td>
        <td>
          <select name="waysToPickup">
            <option value="parcel">택배</option>
            <option value="visit">방문수령</option>
          </select>
        </td>
        <td>
          <select name="delieveryFee">
            <option value="payFirst">선결제</option>
            <option value="payLater">착불</option>
          </select>
          <p>3,000원</p>
        </td>
        <td>
          8,000원
        </td>
        <td>
          <button className="deleteBtn" type="button">
            삭제
          </button>
        </td>
      </tr>
    )
  }
}

export default CartItem

