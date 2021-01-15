import React, {Component} from 'react'

import Category from '../../components/Category/Category'
import ShopList from '../../components/ShopList/ShopList'
import ShopFilter from './Components/ShopFilter/ShopFilter'
import BestItems from '../../components/BestItems/BestItems'
import Footer from '../../components/Footer/Footer'

import './Shop.scss'

class Shop extends Component {
  render() {
    return(
      <>
      {/* 나중에 Nav 컴포넌트 추가할 부분 */}
      <nav></nav>

      <div className="Shop">
        <div className="bestItemsList">
          <BestItems />
        </div>
        <div className="shopContainer">
          <ShopFilter />
          <div className="category">
            <Category />
          </div>
          <div className="ShopList">
            <ShopList />
          </div>
        </div>
      </div>
      <Footer />
      </>
    )
  }
}

export default Shop