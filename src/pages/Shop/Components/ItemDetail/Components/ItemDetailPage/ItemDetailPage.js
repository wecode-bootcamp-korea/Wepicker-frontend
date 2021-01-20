import React, { Component } from 'react'

import ItemOptios from '../ItemOptions/ItemOptions'
import ItemDetailMenu from '../ItemDetailMenu/ItemDetailMenu'

import questionIcon from '../../../../../../images/ItemDetail/question.png'
import like from '../../../../../../images/ItemDetail/like.png'

import './ItemDetailPage.scss'

class ItemDetailPage extends Component {

  render() {
    const {
      isPointMsgHide, 
      isDelieveryMsgHide,
      selectedOne,
      productList,
      showingImg,
      showDelieveryMsg, 
      showPointMsg, 
      selectOption, 
      minusQuantity, 
      plusQunatity, 
      deleteOption,
      selectWaysToPickup,
      selectDelieveryFee,
      addToCart,
      toggleImg,
      controlProductQuantity,
      productQuantity
    } = this.props;

    let totalProductsPrice = productList.product_quantity * parseInt(productList.product_price);
    selectedOne.map((option) => {
      if(option.option_price) {
        totalProductsPrice += option.option_quantity * parseInt(option.option_price)
      }
    })

    let totalQuantity = productList.product_quantity;
    selectedOne.map((option) => {
      if(option.option_quantity) {
        totalQuantity += option.option_quantity
      }
    })

    return(
      <div className="ItemDetailPage">
      <section className="ItemDetail">
        <div className="imgContainer">
          <img className={productList.product_name} src={showingImg} />
          <div className="imgThumnail">
            {
              productList.image_list && productList.image_list.map((_, idx) => {
                return(
                  <img onClick={() => toggleImg(idx)} className={productList.product_name} src={productList.image_list[idx]} />
                )
              })
            }
          </div>
        </div>
        <div className="itemInfo">
          <h1>{productList.product_name}</h1>
          <p className="price">{`${parseInt(productList.product_price)}원`}</p>
          <div className="dividerLine"></div>
          <p>{productList.description}</p>
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
            <select onChange={selectWaysToPickup} name="waysToPickup">
              <option value="parcel">택배</option>
              <option value="visit">방문수령</option>
            </select>
            <select onChange={selectDelieveryFee} name="delieveryFee">
              <option value="payFirst">배송비 (선결제)</option>
              <option value="payLater">배송비 (착불)</option>
            </select>
          </div>
          <ItemOptios 
          selectOption={selectOption}
          selectedOne={selectedOne}
          minusQuantity={minusQuantity}
          plusQunatity={plusQunatity}
          deleteOption={deleteOption}
          productList={productList}
          optionList={productList.option_list}
          controlProductQuantity={controlProductQuantity}
          productQunatity={productQuantity}
          />
          <div className="totalPrice">
            <p>총 상품금액 ({totalQuantity}개)</p>
            <p>
              {totalProductsPrice}원
            </p>
          </div>
          <div className="btnGroup">
            <button type="button">
              구매하기
            </button>
            <button onClick={addToCart} type="button">
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