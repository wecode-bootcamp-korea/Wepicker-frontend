import React from 'react'

import BestItem from './Components/BestItem'

import {BEST_PRODUCTS} from '../../config'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './BestItems.scss'

class BestItems extends React.Component {
  constructor() {
    super();
    this.state = {
      bestItemsList: []
    }
  }

  componentDidMount() {
    fetch(BEST_PRODUCTS)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          bestItemsList: data["product_list"]
        })
      })
  }

  render() {
    const {bestItemsList} = this.state;

    const sliderSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000
    }

    return(
      <section className="BestItems">
        <h1>베스트 제품</h1>
        <ul className="bestItemList">
          <Slider {...sliderSettings}>
            { bestItemsList && bestItemsList.map((data) => {
            return(
              <BestItem
               key={data.product_id} 
               name={data.name} 
               thumnailImage={data.thumnail_image} />
            )
            })}
          </Slider>
        </ul>
      </section>
    )
  }
}

export default BestItems