import React from 'react'

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
       plusQunatity={this.plusQunatity}/>
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