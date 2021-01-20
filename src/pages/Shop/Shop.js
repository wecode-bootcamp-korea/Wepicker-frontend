import React, {Component} from 'react'
import Category from '../../components/Category/Category'
import ShopList from '../../components/ShopList/ShopList'
import BestItems from '../../components/BestItems/BestItems'
import Pagination from './Components/Pagination/Pagination'
import Footer from '../../components/Footer/Footer'
import {PRODUCT_LIST} from '../.././config'
import './Shop.scss'

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      shopListData: [],
      maxPage: 0
    }
  }

  //최초 상품 리스트 렌더
  componentDidMount() {
    fetch(PRODUCT_LIST)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          shopListData: data.product_list,
          maxPage: data.product_list[0].max_page
        })
      })
  }

  //필터 선택시 상품리스트 필터링하여 데이터 불러오기 기능
  selectFilter = (evt) => {
    const currentVal = evt.target.value;
    fetch(`${PRODUCT_LIST}?ordering=${currentVal}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          shopListData: data.product_list
        })
      })
  }

  //카테고리 클릭시 데이터 불러오기 기능
  selectCategory = (url) => {
    if(url !== '') {
      fetch(`${PRODUCT_LIST}?category=${url}`)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            shopListData: data.product_list
          })
        })
    } 
  }

  //페이지네이션 클릭시 데이터 불러오기
  paginationHandler = (page) => {
    fetch(`${PRODUCT_LIST}?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          shopListData: data.product_list,
        })
      })
  }

  render() {
    const {shopListData, maxPage} = this.state;

    return(
      <>
      {/* 나중에 Nav 컴포넌트 추가할 부분 */}
      <nav></nav>

      <div className="Shop">
        <div className="bestItemsList">
          <BestItems />
        </div>
        <div className="shopContainer">
          <div className="category">
            <Category
            selectCategory={this.selectCategory} />
          </div>
          <div className="ShopList">
            <ShopList
            shopListData={shopListData}
            selectFilter={this.selectFilter} />
            <Pagination
             paginationHandler={this.paginationHandler}
             maxPage={maxPage} />
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
}

export default Shop