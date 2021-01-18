import React from 'react'
import {withRouter} from 'react-router-dom'

import ItemDetailPage from './Components/ItemDetailPage/ItemDetailPage'
import Footer from '../../../../components/Footer/Footer'

import './ItemDetail.scss'


class ItemDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      isPointMsgHide: true,
      isDelieveryMsgHide: true,
      selectedOne: [],
      waysToPickup: 'parcel',
      delieveryFee: 'payFirst',
      cartList: [],
      isShowModal: false
    }
  }

  //구매혜택, 배송비 추가 정보 제공 클릭이벤트
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

  //선택된 옵션 확인하는 이벤트
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

  //수량 버튼 이벤트
  minusQuantity = (selectedId) => {
    const {selectedOne} = this.state;
    const newArr = selectedOne.map((option) => {
      if(selectedId === option.id) {
        option.quantity -= 1;
      }
      return option;
    })
    this.setState({
      selectedOne: newArr
    })
  }

  plusQunatity = (selectedId) => {
    const {selectedOne} = this.state;
    const newArr = selectedOne.map((option) => {
      if(selectedId === option.id) {
        option.quantity += 1;
      }
      return option;
    })
    this.setState({
      selectedOne: newArr
    })
  }

  //옵션 삭제 이벤트
  deleteOption = (selectedId) => {
    const {selectedOne} = this.state;
    const newArr = selectedOne.filter((option) => selectedId !== option.id)
    this.setState({
      selectedOne: newArr
    })
  }

  //픽업 방법 선택 이벤트
  selectWaysToPickup = (evt) => {
    const {name, value} = evt.target
    this.setState({
      [name]: [value]
    })
  }

  //택배비 방법 선택 이벤트
  selectDelieveryFee = (evt) => {
    const {name, value} = evt.target
    this.setState({
      [name]: [value]
    })
  }

  //장바구니 리스트 추가
  addToCart = () => {
    const {selectedOne} = this.state;
    if(selectedOne.length > 0) {
      this.setState({
        cartList: [
          ...selectedOne,
          {
            waysToPickup: this.state.waysToPickup,
            delieveryFee: this.state.delieveryFee
          }
        ],
      })
      this.props.history.push('/cart')
    } else {
      alert('옵션을 선택해 주세요');
    }

  }

  render() {
    const {isPointMsgHide, isDelieveryMsgHide, selectedOne} = this.state;

    return(
      <>
      <ItemDetailPage
       isPointMsgHide={isPointMsgHide}
       isDelieveryMsgHide={isDelieveryMsgHide}
       selectedOne={selectedOne}
       showPointMsg={this.showPointMsg}
       showDelieveryMsg={this.showDelieveryMsg}
       selectOption={this.selectOption}
       minusQuantity={this.minusQuantity}
       plusQunatity={this.plusQunatity}
       deleteOption={this.deleteOption}
       selectWaysToPickup={this.selectWaysToPickup}
       selectDelieveryFee={this.selectDelieveryFee}
       addToCart={this.addToCart} />
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
      quantity: 1,
      price: 11000
    },
    {
      id: 2,
      name: "wrapping service",
      quantity: 1,
      price: 4000
    }
  ]