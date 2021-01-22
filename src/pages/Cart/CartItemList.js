import React from 'react';
import wish from '../../images/Nav/heart.png';
import Addwish from '../../images/Cart/AddwishHeart.png';
import './CartItemList.scss';

class CartItemList extends React.Component {
    constructor(){
        super();
        this.state = {
            initData: [],
            productPriceTotal:0,
            deliverWay:"착불",
            deliverCost:"3000",
            changeHeart: {wish}
        };
    }

    componentDidMount() {
        fetch('http://10.58.5.192:8000/order/cart', {
            method: 'GET',
            headers: {
                Authorization:localStorage.getItem("token")
            }
        })
        .then(res => res.json())
        .then(res => {
            this.setState({
                 initData: res.cart_list
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

    handleNumberPricePlus = (selectedId) => {
        const {initData} = this.state;
        const newArr = initData.map((data) => {
            if(data.id === selectedId) {
                data.itemNumber += 1;
            }
            return data;
        })
        this.setState({
            initData: newArr
        })
    };

    handleNumberPriceMinus = (selectedId) => {
        const {initData} = this.state;
        const newArr = initData.map((data) => {
            if(data.id === selectedId) {
                data.itemNumber -= 1;
            }
            return data;
        })
        this.setState({
            initData: newArr
        })
    };

    handleDeliverWayFree = () => {
        this.setState({
            deliverWay: "무료",
            deliverCost: "0"
        })
    }

    handleDeliverWayCost = () => {
        this.setState({
            deliverWay: "착불",
            deliverCost: "3000"
        })
    }

    handleWishAdd = () => {
        alert("위시리스트에 추가 되었습니다!")
        this.setState({
            changeHeart: {Addwish}
        })
    }

    render() {
        localStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTd9.jkMTXqX7Hu-zInEm8fySh69NtyX4DIXGerYXg03_NeE")
            return (
                <section className="CartItemList">
                    {this.state.initData && this.state.initData.map(product => {
                        let itemNumPrice = ( product.price * product.quantity );
                    return (
                        <table>
                            <tr 
                            className="selectCartItem" 
                            key={product.product}>
                                <th className="itemCheckSection">
                                    <input 
                                    type="checkbox" 
                                    className="itemCheckBtn"
                                    onChange={(e) => this.handleItemPriceAddRemove
                                    (e, parseInt( product.price * product.quantity ))} />
                                </th>
                                <th className="itemInfo">
                                    <div className="itemInfoContent">
                                        <img 
                                        alt={product.name}
                                        src={product.image_url}
                                        className="itemProfileImg" />
                                        <div className="itemInfoText">
                                            <div className="itemTitle">
                                            {product.name}    
                                            </div>
                                            <div className="itemDetailInfo">
                                                {product.option_name}
                                                &nbsp;
                                                &#47;
                                                &nbsp;
                                                {product.quantity}개  
                                            </div>
                                        </div>
                                    </div>
                                </th>
                                <th className="itemWish">
                                    <img alt="Wish List Page Icon" 
                                    className="wishBtn"  
                                    src={wish} 
                                    onClick={this.handleWishAdd}/>
                                </th>
                                <th className="itemAmount">
                                    <div className="itemAmountContent">
                                        <div className="currentNumber">
                                            {product.quantity}개
                                        </div>
                                        <div className="quantityForm">
                                            <button 
                                            className="plus"
                                            onClick={() => this.handleNumberPricePlus(product.product)}>
                                            +
                                            </button>
                                            <button 
                                            className="minus"
                                            onClick={() => this.handleNumberPriceMinus(product.product)}>
                                            -
                                            </button>
                                        </div>
                                    </div>
                                </th>
                                <th className="deliverWay">
                                    <div className="deliverWayContent">
                                        <div>
                                            <button
                                            className="pickupWay"
                                            onClick={this.handleDeliverWayCost}>
                                            택배
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                            className="pickupWay"
                                            onClick={this.handleDeliverWayFree}>
                                            방문수령
                                            </button>
                                        </div>
                                    </div>
                                </th>   
                                <th className="deliverPrice">
                                    <div className="deliverPriceContent">
                                        {this.state.deliverWay}
                                    </div>
                                </th>
                                <th className="itemPrice">
                                    <div className="itemPriceContent">
                                        {itemNumPrice.toLocaleString()}원
                                    </div>
                                </th>
                                <th></th>
                            </tr>
                        </table>
                        )
                    }
                )
            }
                        <table>
                            <tr className="paymentInfo">
                                <td className="blankSectionOne" />

                                <td className="payText">
                                    <div className="payTextContent">
                                        <div className="productPrice">상품가격</div>
                                        <div className="shippingPrice">배송비</div>
                                        <div className="point">적립예정 포인트</div>
                                    </div>
                                </td>

                                <td className="payNumber">
                                    <div className="payNumberContent">
                                        <div
                                        className="productPriceNumber">
                                        {this.state.productPriceTotal.toLocaleString()}원
                                        </div>
                                        <div
                                        className="shippingPriceNumber">
                                        {this.state.deliverCost.toLocaleString()}원
                                        </div>
                                        <div
                                        className="pointNumber">
                                        {`${parseInt(this.state.productPriceTotal)*0.05}`}P
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        
                        <table>
                            <tr className="amoutInfo">
                                <td className="amoutBlankSectionOne" />

                                <div className="amountTextContent">
                                    <td className="amountText">
                                        <div>
                                            <div className="paySum">결제금액</div>
                                        </div>
                                    </td>

                                    <td className="amountNumber">
                                        <div>
                                        {parseInt(this.state.productPriceTotal)+parseInt(this.state.deliverCost)}원
                                        </div>
                                    </td>
                                </div>

                                <td className="amoutBlankSectionTwo" />
                            </tr>
                        </table>

                    <div></div>
                </section>
        )
    }
}

export default CartItemList