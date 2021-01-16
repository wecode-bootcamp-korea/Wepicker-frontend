import React, { Component } from 'react'

import CartItem from './Components/CartItem/CartItem'
import CartPriceBox from './Components/CartPriceBox/CartPriceBox'

import './CartList.scss'

class CartList extends Component{
  constructor() {
    super();
    this.state = {
      cartList: []
    }
  }

  componentDidMount() {
    fetch('/data/cartList.json')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        cartList: data["CART_LIST"]
      })
    })
  }

  render() {
    const {cartList} = this.state;

    return(
    <div className="cartContainer">
        <section className="CartList">
        <h1>장바구니</h1>
        <span></span>
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
            {
              cartList && cartList.map((data) => {
                return(
                  <CartItem
                   key={data.id}
                   cartList={cartList}
                   id={data.id}
                   name={data.name}
                   options={data.options}
                   waysToPickup={data.waysToPickup}
                   delieveryFee={data.delieveryFee} />
                )
              })
            }
            <CartPriceBox />
          </tbody>
        </table>
        <div>
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