import React from 'react';
import './CartItemList.scss';

class CartItemList extends React.Component {
    render() {
      return (
          <section className="CartItemList">
            <table>
                <tr className="selectCartItem">
                    <th className="itemCheckSection">
                        <input 
                        type="checkbox" 
                        className="itemCheckBtn" />
                    </th>
                    <th className="itemInfo">
                        <div className="itemProfileImg">
                        </div>
                        <div className="itemTitle">
                        </div>
                        <div className="itemDetailInfo">
                            <span className="itemSelectOption">
                            </span>
                            <span className="itemSelectNumber">
                            </span>
                        </div>
                    </th>
                    <th className="itemWish">위시</th>
                    <th className="itemAmount">
                        <div className="correctNumber">개
                        </div>
                        <button className="changeNumber">변경
                        </button>
                    </th>
                    <th className="deliverWay">
                        <select></select>
                    </th>
                    <th className="deliverPrice">
                        <select></select>
                        <div></div>
                        <button></button>
                    </th>
                    <th className="itemPrice">가격</th>
                    <th></th>
                </tr>
            </table>
        </section>
        )
    }
}

export default CartItemList