import React from 'react'

import ItemOptios from './Components/ItemOptions/ItemOptions'
import ItemDetailMenu from './Components/ItemDetailMenu/ItemDetailMenu'
import Footer from '../../../../components/Footer/Footer'

import questionIcon from '../../../../images/ItemDetail/question.png'
import like from '../../../../images/ItemDetail/like.png'

import './ItemDetail.scss'


class ItemDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      isPointMsgHide: true,
      isDelieveryMsgHide: true,
      selectedOne: []
    }
  }

  showPointMsg = () => {
    this.setState({
      isPointMsgHide: !this.state.isPointMsgHide
    })
  }

  showDelieveryMsg = () => {
    this.setState({
      isDelieveryMsgHide: !this.state.isDelieveryMsgHide
    })
  }

  selectOption = (evt) => {
    const selectedValue = evt.target.value;
    const optionArr = OPTIONS.filter(option => option.id === parseInt(selectedValue))
    const {selectedOne} = this.state;

    this.setState({
      selectedOne: [
        ...selectedOne,
        ...optionArr
      ]
    })

    const checkId = selectedOne.some((option) => option.id === parseInt(selectedValue))
    if(checkId) {
      alert('이미 선택된 옵션입니다.')
      const newArr = selectedOne.filter((option) => option.id === parseInt(selectedValue))
      const arr = selectedOne.filter((option) => option.id !== parseInt(selectedValue))
      this.setState({
        selectedOne: [
          ...newArr,
          ...arr
        ]
      })
      return;
    } else {
      this.setState({
        selectedOne: [
          ...selectedOne,
          ...optionArr
        ]
      })
    }
  }

  render() {
    const {isPointMsgHide, isDelieveryMsgHide, ItemDetailData, selectedOne} = this.state;

    return(
      <>
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
          <p className="price">19,000</p>
          <div className="dividerLine"></div>
          <p>유기농 면으로 만든 무형광, 무표백 스트링 그물백.</p>
          <dl>
            <dt>구매혜택</dt>
            <dd>
              80 포인트 적립예정
              <button type="button" onClick={this.showPointMsg}>
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
              <button type="button" onClick={this.showDelieveryMsg}>
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
          selectOption={this.selectOption}
          selectedOne={selectedOne}/>
          <div className="totalPrice">
            <p>총 상품금액 (1개)</p>
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
        <section className="ItemDetailInfo">
          <ItemDetailMenu />
        </section>
      </div>
    <Footer />
    </>
    )
  }
}

export default ItemDetail

const OPTIONS =
  [
    {
      id: 1,
      name: "organic string bag",
      price: 11000
    },
    {
      id: 2,
      name: "wrapping service",
      price: 4000
    }
  ]