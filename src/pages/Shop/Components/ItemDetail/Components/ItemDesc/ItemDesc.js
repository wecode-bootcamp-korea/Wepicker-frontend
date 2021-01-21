import React, {Component} from 'react'
import {SERVER_URL} from '../../../../../../config'
import './ItemDesc.scss'

class ItemDesc extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
    }
  }

  componentDidMount() {
    // fetch(`${SERVER_URL}/product/${parseInt(this.props.match.params.id)}`)
    fetch('/data/productList.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          productList: data.product_dict
        })
      })
  }

  render() {
    const {productList} = this.state

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