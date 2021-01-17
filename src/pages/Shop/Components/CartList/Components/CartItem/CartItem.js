import React, { Component } from 'react'

import './CartItem.scss'

class CartItem extends Component {
  render() {
    const {cartList, id, name, options, waysToPickup, delieveryFee} = this.props;

    let totalQuantity = 0;
    for(let i = 0; i < options.length; i ++) {
      totalQuantity += options[i].quantity;
    }

    let totalPrice = 0;
    for(let i = 0; i < options.length; i++) {
      totalPrice += options[i].quantity * options[i].price;
    }

    return(
      <tr className="CartItem">
        <td>
          <input type="checkbox" />
        </td>
        <td>
          <div>
            <img alt="organic string bag" src="https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
          </div>
          <ul>
            {
              options && options.map((option) => {
                return(
                    <li>
                      {option.name} | {option.quantity}개
                    </li>  
                )
              })
            }
          </ul>
        </td>
        <td>
          <p>{totalQuantity}개</p>
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
          {totalPrice}
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

