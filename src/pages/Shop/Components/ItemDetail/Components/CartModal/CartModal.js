import React, { Component } from 'react'
import './CartModal.scss'

class  CartModal extends Component {
  render() {
    return(
      <div className="CartModal">
        <p>선택하신 상품을 장바구니에 담았습니다.</p>
        <div className="btnGroup">
          <button>
            계속쇼핑            
          </button>
          <button>
            장바구니           
          </button>
        </div>
      </div>
    )
  }
}

export default CartModal