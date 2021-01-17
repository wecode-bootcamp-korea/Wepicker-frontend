import React, { Component } from 'react';

import './CartPriceBox.scss'

class CartPriceBox extends Component {
  render() {
    const {cartList} = this.props;

    let totalPrice = 0;
    for(let i = 0; i < cartList.length; i++) {
      totalPrice += cartList[i].price * cartList[i].quantity;
    }

    console.log(totalPrice)

    return(
      <>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <div>
            <p>상품가격</p>
            <p>배송비</p>
            <p>적립예정 포인트</p>
          </div>
        </td>
        <td>
          <div>
            <p>{totalPrice}원</p>
            <p>3,000원</p>
            <p>160 포인트</p>
          </div>
        </td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          결제금액
        </td>
        <td>
          11,000원
        </td>
        <td></td>
      </tr>
    </>      
    )
  }
}

export default CartPriceBox