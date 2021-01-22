import React, {Component} from 'react'
import {SERVER_URL} from '../../../../../../config'
import './ItemDesc.scss'

class ItemDesc extends Component {
  render() {
    const {productList} = this.props;

    return(
      <div className="ItemDesc">
        <h1>{productList.product_name}</h1>
        <img alt={productList.product_name} src={productList.image_list && productList.image_list[0]} />
        <p>
          {productList.description}
        </p>
      </div>
    )
  }
}

export default ItemDesc