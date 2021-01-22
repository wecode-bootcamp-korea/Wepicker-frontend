import React from 'react';
import CartItem from './CartItemList';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import './CartPage.scss';

class CartPage extends React.Component {
    render() {
      return (
          <>
          <Nav/>
          <section className="cartPage">
            <div className="cartPageContent">
                <div className="title">
                    <span>장바구니</span>
                </div>
                <div className="inCartNumberBtn">
                    <span className="inCartNumber">3</span>
                </div>

                <div className="orderContent">
                    <table>
                        <tr className="itemSubject">
                            <th className="checkBoxSection">
                                <input 
                                type="checkbox" 
                                className="allCartCheckBox" />
                            </th>
                            <th className="itemInfo">item</th>
                            <th className="itemWish">위시</th>
                            <th className="itemAmount">수량</th>
                            <th className="deliverWay">배송수단</th>
                            <th className="delivePrice">배송비</th>
                            <th className="price">가격</th>
                            <th></th>
                        </tr>
                    </table>
                    <div>
                        <CartItem />
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
        </>
        )
    }
  }
  
  export default CartPage