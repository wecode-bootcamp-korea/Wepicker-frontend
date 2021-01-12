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
    fetch('/data/shoplist.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          shopListData: data["PRODUCT_LISTS"]
        })
      })
  }


  render() {
    const {shopListData} = this.state

    return(
      <ul className="ShopList">
        {shopListData && shopListData.map((data) => {
          return(
            <ShopItem key={data.id} id={data.id} name={data.name} price={data.price} url={data.url} />
          )
        })}
      </ul>
    )
  }
}

export default ShopList