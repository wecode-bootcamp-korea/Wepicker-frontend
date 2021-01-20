import React from 'react'
import ShopItem from './Components/ShopItem'
import ShopFilter from '../../pages/Shop/Components/ShopFilter/ShopFilter'
import './ShopList.scss'

class ShopList extends React.Component {
  render() {
    const {shopListData, selectFilter} = this.props

    return(
      <>
        <ShopFilter
        selectFilter={selectFilter}
        />
        <ul className="ShopList">
        {shopListData && shopListData.map((data) => {
          return(
            <ShopItem
            key={data.product_id} 
            productId={data.product_id} 
            name={data.name} 
            price={data.price} 
            thumnailImage={data.thumnail_image}
            subImage = {data.sub_image} />
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