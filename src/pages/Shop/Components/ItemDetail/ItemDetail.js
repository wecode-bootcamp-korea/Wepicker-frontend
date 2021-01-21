import React from 'react'
import {withRouter} from 'react-router-dom'
import {SERVER_URL, CART} from '../../../../config'
import Nav from '../../../../../src/components/Nav/Nav'
import ItemDetailPage from './Components/ItemDetailPage/ItemDetailPage'
import Footer from '../../../../components/Footer/Footer'
import './ItemDetail.scss'

class ItemDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      isPointMsgHide: true,
      isDelieveryMsgHide: true,
      productList: [],
      selectedOne: [],
      showingImg: '',
      isWished: false,
      waysToPickup: 0,
      delieveryFee: 1,
      isShowModal: false
    }
  }

  //최초 렌더시 상품 상세페이지 데이터 불러오기
  componentDidMount() {
    fetch(`${SERVER_URL}/product/${parseInt(this.props.match.params.id)}`)
    // fetch('/data/productList.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          productList: data.product_dict,
          showingImg: data.product_dict.image_list[0]
        })
      })
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
    const {productList, selectedOne} = this.state;
    const selectedValue = evt.target.value;
    const optionArr = productList.option_list.filter(option => option.option_id === parseInt(selectedValue))
    this.setState({
      selectedOne: [
        ...selectedOne,
        ...optionArr
      ]
    })

    const checkId = selectedOne.some((option) => option.option_id === parseInt(selectedValue))
    if(checkId) {
      alert('이미 선택된 옵션입니다.')
      const newArr = selectedOne.filter((option) => option.option_id === parseInt(selectedValue))
      const arr = selectedOne.filter((option) => option.option_id !== parseInt(selectedValue))
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
      if(selectedId === option.option_id) {
        option.option_quantity -= 1;
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
      if(selectedId === option.option_id) {
        option.option_quantity += 1;
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
    const newArr = selectedOne.filter((option) => selectedId !== option.option_id)
    this.setState({
      selectedOne: newArr
    })
  }

  //픽업 방법 선택 이벤트
  selectWaysToPickup = (evt) => {
    const {name, value} = evt.target
    console.log(name,value,'asdfasdfasdfasddfda');
    this.setState({
      [name]: parseInt(value)
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
    const {productList, selectedOne, waysToPickup, delieveryFee} = this.state
    fetch(`${CART}`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({
        product: productList.product_id,
        quantity: productList.product_quantity,
        price: productList.product_price,
        option_list: selectedOne,
        delivery_cost: `${waysToPickup} + ${delieveryFee}`
      })
    })
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
    })
    this.props.history.push('/cart')
  }

  //이미지 토글 함수
  toggleImg = (idx) => {
    const {productList} = this.state;
    this.setState({
      showingImg: productList.image_list[idx]
    })
  }

  //상품 수량 조절 함수
  controlProductQuantity = (evt) => {
    const {name} = evt.target;
    const {productList} = this.state
    if(name === 'plus') {
      const newData = {
        ...productList,
        product_quantity : productList.product_quantity += 1
      }
      this.setState({
        productList: newData
      })
    } else {
      const newData = {
        ...productList,
        product_quantity : productList.product_quantity -= 1
      }
      this.setState({
        productList: newData
      })
    }
  }

  //위시리스트 추가 기능
  addToWish = () => {
    this.setState({
      isWished: !this.state.isWished
    })
  }

  render() {
    const {isPointMsgHide, isDelieveryMsgHide, selectedOne, productList, showingImg, isWished, waysToPickup} = this.state;
    localStorage.setItem("token", 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTV9.ASvJ2_fpdrgdgd6ExV4WtFhy6HSW7ZAEo19wdXQKMAA');
    console.log(typeof waysToPickup);
    return(
      <>
      <Nav />
      <ItemDetailPage
       isPointMsgHide={isPointMsgHide}
       isDelieveryMsgHide={isDelieveryMsgHide}
       selectedOne={selectedOne}
       productList={productList}
       showingImg={showingImg}
       isWished={isWished}
       waysToPickup={waysToPickup}
       showPointMsg={this.showPointMsg}
       showDelieveryMsg={this.showDelieveryMsg}
       selectOption={this.selectOption}
       minusQuantity={this.minusQuantity}
       plusQunatity={this.plusQunatity}
       deleteOption={this.deleteOption}
       selectWaysToPickup={this.selectWaysToPickup}
       selectDelieveryFee={this.selectDelieveryFee}
       controlProductQuantity={this.controlProductQuantity}
       addToCart={this.addToCart}
       toggleImg={this.toggleImg}
       addToWish={this.addToWish} />
      <Footer />
    </>
    )
  }
}

export default ItemDetail