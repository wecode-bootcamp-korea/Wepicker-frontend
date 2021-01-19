import React, {Component} from 'react'

import Category from '../../components/Category/Category'
import ShopList from '../../components/ShopList/ShopList'
import BestItems from '../../components/BestItems/BestItems'
import Footer from '../../components/Footer/Footer'

import {PRODUCT_LIST} from '../.././config'

import './Shop.scss'

class Shop extends Component {
  constructor() {
    super();
    this.state = {
      shopListData: [],
      filterValue: 'recent',
      currentCategory: ''
    }
  }

  componentDidMount() {
    fetch(PRODUCT_LIST)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          shopListData: data["product_list"]
        })
      })
  }

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

  render() {
    const {shopListData, filterValue} = this.state;

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
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
}

export default Shop