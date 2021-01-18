import React, { Component } from 'react'

import CartItem from './Components/CartItem/CartItem'
import CartPriceBox from './Components/CartPriceBox/CartPriceBox'

import './CartList.scss'

class CartList extends Component{
  render() {
    return(
    <div className="cartContainer">
        <section className="CartList">
          <div className="cartHeader">
            <h1>장바구니</h1>
            <div className="cartListLength"></div>
          </div>
        <table>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>
                item
              </th>
              <th>
                수량
              </th>
              <th>
                배송수단
              </th>
              <th>
                배송비
              </th>
              <th>
                가격
              </th>
              <th>
              </th>
            </tr>
          </thead>
          <tbody>
           
          </tbody>
        </table>
        <div className="btnGroup">
          <button type="button">
            계속 쇼핑하기
          </button>
          <button type="submit">
            주문하기
          </button>
        </div>
      </section>
    </div>
    )
  }
}

export default CartList