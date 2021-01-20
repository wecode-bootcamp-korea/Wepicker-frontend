import React from 'react';
import './EmptyCart.scss';

class EmptyCart extends React.Component {
    render() {
      return (
          <section className="cartPage">
            <div className="cartPageContent">
                <div className="title">
                    <span>장바구니</span>
                </div>
                <div className="inCartNumberBtn">
                    <span className="inCartNumber">1</span>
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
                        <tr className="emptySection">
                            <div>
                                <span>장바구니가 비어있습니다.</span>
                            </div>
                        </tr>
                    </table>
                </div>

                <div className="bottomSection">
                    <button>계속쇼핑하기</button>
                </div>
            </div>
        </section>
        )
    }
  }
  
  export default EmptyCart