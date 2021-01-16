import React, { Component } from 'react'

import ItemOptios from '../ItemOptions/ItemOptions'
import ItemDetailMenu from '../ItemDetailMenu/ItemDetailMenu'

import questionIcon from '../../../../../../images/ItemDetail/question.png'
import like from '../../../../../../images/ItemDetail/like.png'

import './ItemDetailPage.scss'

class ItemDetailPage extends Component {

  render() {
    const {
      isPointMsgHide, isDelieveryMsgHide, selectedOne, showDelieveryMsg, showPointMsg, selectOption, minusQuantity, plusQunatity, deleteOption
    } = this.props;

    let totalProductsPrice = 0;
    for(let i = 0; i < selectedOne.length; i++) {
      totalProductsPrice += selectedOne[i].price * selectedOne[i].quantity
    }

    return(
      <div className="ItemDetailPage">
      <section className="ItemDetail">
        <div className="imgContainer">
          <img className="유기농 스트링 에코백" src="https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
          <div className="imgThumnail">
            <img className="유기농 스트링 에코백" src="https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
            <img className="유기농 스트링 에코백" src="https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
          </div>
        </div>
        <div className="itemInfo">
          <h1>유기농 스트링 에코백</h1>
          <p className="price">11,000</p>
          <div className="dividerLine"></div>
          <p>유기농 면으로 만든 무형광, 무표백 스트링 그물백.</p>
          <dl>
            <dt>구매혜택</dt>
            <dd>
              80 포인트 적립예정
              <button type="button" onClick={showPointMsg}>
                <img alt="more info" src={questionIcon} />
              </button>
              <div className={isPointMsgHide ? "pointMessage hide" : "pointMessage"}>
                적립금액은 할인 쿠폰 적용 및 옵션 가격, 수량을 기준으로 적립되므로
                최종 적립금액은 쿠폰 사용 여부 및 옵션 가격, 수량에 따라 달라질 수 있습니다.
              </div>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd>
              3,000원 (50,000원 이상 무료배송) | 도서산간 배송비 추가
              <button type="button" onClick={showDelieveryMsg}>
                <img alt="more info" src={questionIcon} />
              </button>
              <div className={isDelieveryMsgHide ? "delieveryMessage hide" : "delieveryMessage"}>
                제주 및 도서지역 추가 3,000원
              </div>
            </dd>
          </dl>
          <div className="delieveryOptions">
            <select name="waysToPickup">
              <option value="parcel">택배</option>
              <option value="visit">방문수령</option>
            </select>
            <select name="delieveryFee">
              <option value="payFirst">배송비 (선결제)</option>
              <option value="payLater">배송비 (착불)</option>
            </select>
          </div>
          <ItemOptios 
          selectOption={selectOption}
          selectedOne={selectedOne}
          minusQuantity={minusQuantity}
          plusQunatity={plusQunatity}
          deleteOption={deleteOption}/>
          <div className="totalPrice">
            <p>총 상품금액 (1개)</p>
            <p>
              {totalProductsPrice}
            </p>
          </div>
          <div className="btnGroup">
            <button type="button">
              구매하기
            </button>
            <button type="button">
              장바구니
            </button>
            <button type="button">
              <div className="likeContainer">
                <img alt="like" src={like} />
                <span>0</span>
              </div>
            </button>
          </div>
        </div>
      </section>
        <section className="ItemDetailInfo">
          <ItemDetailMenu />
        </section>
      </div>
    )
  }
}

export default ItemDetailPage