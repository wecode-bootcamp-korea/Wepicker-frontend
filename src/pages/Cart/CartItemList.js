import React from 'react';
import './CartItemList.scss';

class CartItemList extends React.Component {
    constructor(){
        super();
        this.state = {
            initData: [],
            total:0
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
        console.log("handleItemPriceAddRemove 함수 실행")
        e.target?.checked && this.setState({
            total: (this.state.total + price),
        })
        !(e.target?.checked) && this.setState({
            total: (this.state.total - price),
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
                                    <div className="correctNumber">
                                    {product.itemNumber}개
                                    </div>
                                    <button className="changeNumber">변경
                                    </button>
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
                            <tr>
                                <th>
                                    <div>{product.itemPrice}원</div>
                                    <div></div>
                                    <div>
                                    {`${parseInt(product.itemPrice)*0.05} 포인트`
                                    }</div>
                                </th>
                            </tr>
                        </table>
                        )
                    })}

                    <div>
                        <span>상품가격</span>
                        <span>배송비</span>
                        <span>적립예정 포인트</span>
                    </div>

                    <div>결제금액</div>
                    <div>{this.state.total}</div>

                    <div></div>
                </section>
        )
    }
}

export default CartItemList