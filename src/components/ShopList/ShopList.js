import React from 'react'

import ShopItem from './Components/ShopItem'

import './ShopList.scss'

class ShopList extends React.Component {
  constructor() {
    super();
    this.state = {
      shopListData: []
    }
  }

  componentDidMount() {
    fetch('http://10.58.5.192:8000/product/all')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          shopListData: data["product_list"]
        })
      })
  }


  render() {
    const {shopListData} = this.state

    return(
      <ul className="ShopList">
        {shopListData && shopListData.map((data) => {
          return(
            <ShopItem 
            key={data["product_id"]} 
            productId={data["product_id"]} 
            name={data.name} 
            price={data.price} 
            thumnailImage={data["thumnail_image"]} />
          )
        })}
      </ul>
    )
  }
}

export default ShopList