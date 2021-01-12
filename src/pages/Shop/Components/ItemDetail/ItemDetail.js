import React from 'react'

import ItemOptios from './Components/ItemOptions'

import questionIcon from '../../../../images/ItemDetail/question.png'
import like from '../../../../images/ItemDetail/like.png'

import './ItemDetail.scss'


class ItemDetail extends React.Component {
  render() {
    return(
      <section className="ItemDetail">
        <div className="imgContainer">
          <img className="mainImg" src="https://images.unsplash.com/photo-1529763898477-40a4374b072f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
          <div className="imgThumnail">
            <img src="https://images.unsplash.com/photo-1529763898477-40a4374b072f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            <img src="https://images.unsplash.com/photo-1529763898477-40a4374b072f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
          </div>
        </div>
        <div className="itemInfo">
          <h1>천연 목욕 수세미(어린수세미)</h1>
          <p className="price">4,000원</p>
          <div className="dividerLine"></div>
          <p>매일의 목욕에 부드럽게 사용할 수 있는 천연 어린수세미</p>
          <dl>
            <dt>구매혜택</dt>
            <dd>
              80 포인트 적립예정
              <button type="button">
                <img alt="more info" src={questionIcon} />
              </button>
            </dd>
          </dl>
          <dl>
            <dt>배송비</dt>
            <dd>
              3,000원 (50,000원 이상 무료배송) | 도서산간 배송비 추가
              <button type="button">
                <img alt="more info" src={questionIcon} />
              </button>
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
          <ItemOptios />
          <div className="quantityBox">
            <label>수량</label>
            <div className="quantityForm">
              <button>-</button>
              <input type="number" />
              <button>+</button>
            </div>
            <p>4,000원</p>
          </div>
          <div className="totalPrice">
            <p>총 상품금액(1개)</p>
            <p>4,000원</p>
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
    )
  }
}

export default ItemDetail