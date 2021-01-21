import React from 'react';
import './CartItemList.scss';

class CartItemList extends React.Component {
    constructor(){
        super();
        this.state = {
            initData: [],
            productPriceTotal:0
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/data/selectCartItemData.json', {
            method: 'GET'
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                initData: res.data
            });
        })
    }

    handleItemPriceAddRemove = (e, price) => {
        e.target?.checked && this.setState({
            productPriceTotal: (this.state.productPriceTotal + price),
        })
        !(e.target?.checked) && this.setState({
            productPriceTotal: (this.state.productPriceTotal - price),
        })
    }

    render() {
            return (
                <section className="CartItemList">
                    {this.state.initData.map(product => {
                    return (
                        <table>
                            <tr 
                            className="selectCartItem" 
                            key={product.id}>
                                <th className="itemCheckSection">
                                    <input 
                                    type="checkbox" 
                                    className="itemCheckBtn"
                                    onChange={(e) => this.handleItemPriceAddRemove(e, parseInt( product.itemPrice))} />
                                </th>
                                <th className="itemInfo">
                                    <img 
                                    alt={product.itemName}
                                    src={product.itemProfileImg}
                                    className="itemProfileImg" />
                                    <div className="itemTitle">
                                    {product.itemName}    
                                    </div>
                                    <div className="itemDetailInfo">
                                        <span className="itemSelectOption">
                                        {product.itemOption}
                                        </span>
                                        &#47;
                                        <span className="itemSelectNumber">
                                        {product.itemNumber}개
                                        </span>
                                    </div>
                                </th>
                                <th className="itemWish">위시</th>
                                <th className="itemAmount">
                                        <div className="quantityForm">
                                        <button name="minus">-</button>
                                        <input 
                                        type="number" 
                                        value="ex"
                                        min="1" 
                                        max="10"/>
                                        <button name="plus">+</button>
                                    </div>
                                </th>
                                <th className="deliverWay">
                                    <select>
                                        <option>
                                        {product.itemShippingWay}
                                        </option>
                                    </select>
                                </th>
                                <th className="deliverPrice">
                                    <select>
                                        <option>
                                            {product.itemShippingPayment}
                                        </option>
                                    </select>
                                    <div>3,000원</div>
                                    <button></button>
                                </th>
                                <th className="itemPrice">
                                    {product.itemPrice}
                                </th>
                                <th></th>
                            </tr>
                        </table>
                        )
                    }
                )
            }
                        <table>
                            <tr>
                                <td className="blankSectionOne" />

                                <td>
                                    <div>
                                    원
                                    </div>

                                    <div>
                                    무료 & 3,000원
                                    </div>
                                    
                                    <div>
                                    포인트
                                    </div>
                                </td>

                                <td className="blankSectionTwo" />
                            </tr>
                        </table>

                    <div>
                        <span>상품가격</span>
                        <span>배송비</span>
                        <span>적립예정 포인트</span>
                    </div>

                    <div>상품가격</div>
                    <div>{this.state.productPriceTotal}</div>

                    <div></div>
                </section>
        )
    }
}

export default CartItemList

//{product.itemPrice}
// /{`${parseInt(product.itemPrice)*0.05} 포인트`}