import React from 'react'
import {withRouter} from 'react-router-dom'
import {SERVER_URL, CART} from '../../../../config'
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
      waysToPickup: 'parcel',
      delieveryFee: 'payFirst',
      isShowModal: false
    }
  }

  //최초 렌더시 상품 상세페이지 데이터 불러오기
  componentDidMount() {
    // fetch(`${SERVER_URL}/product/${parseInt(this.props.match.params.id)}`)
    fetch('/data/productList.json')
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
    console.log(newArr)
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
    const {productList, selectedOne} = this.state
    fetch(`${CART}`, {
      method: "POST",
      body: JSON.stringify({
        product_id: productList.product_id,
        product_quantity: productList.product_quantity,
        option_list: selectedOne,
        delivery_cost_id: 0
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

  render() {
    const {isPointMsgHide, isDelieveryMsgHide, selectedOne, productList, showingImg} = this.state;
    console.log(productList)
    return(
      <>
      <ItemDetailPage
       isPointMsgHide={isPointMsgHide}
       isDelieveryMsgHide={isDelieveryMsgHide}
       selectedOne={selectedOne}
       productList={productList}
       showingImg={showingImg}
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
       toggleImg={this.toggleImg} />
      <Footer />
    </>
    )
  }
}

export default ItemDetail