import React from 'react'

import ShopItem from './Components/ShopItem'
import ShopFilter from '../../pages/Shop/Components/ShopFilter/ShopFilter'

import {PRODUCT_LIST} from '../.././config'
import './ShopList.scss'

class ShopList extends React.Component {
  constructor() {
    super();
    this.state = {
      shopListData: [],
      filterValue: 'recent'
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

  componentDidUpdate() {
    const {filterValue} = this.state;
    fetch(`PRODUCT_LIST?ordering=${filterValue}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  selectFilter = (evt) => {
    this.setState({
      filterValue: evt.target.value
    })
  }


  render() {
    const {shopListData, filterValue} = this.state;

    return(
      <>
        <ShopFilter
        selectFilter={this.selectFilter}
        />
        <ul className="ShopList">
        {shopListData && shopListData.map((data) => {
          return(
            <ShopItem
            key={data["product_id"]} 
            productId={data["product_id"]} 
            name={data.name} 
            price={data.price} 
            thumnailImage={data["thumnail_image"]}
            subImage = {data["sub_image"]} />
          )
        })}
      </ul>
      </>
      
    )
  }
}

export default ShopList

const FILTER_MENU =
  {
  '등록순': 'recent', 
  '인기순': 'best',
  '낮은가격순': 'min_price',
  '높은가격순': 'max_price',
  '이름순': 'abc',
  '이름역순': 'descabc'};