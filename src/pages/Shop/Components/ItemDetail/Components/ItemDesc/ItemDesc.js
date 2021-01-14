import React, {Component} from 'react'

import './ItemDesc.scss'

class ItemDesc extends Component {
  render() {
    return(
      <div className="ItemDesc">
        <h1>유기농 스트링 에코백</h1>
        <h3>Organic String Eco Bag</h3>
        <img className="유기농 스트링 에코백" src="https://images.unsplash.com/photo-1537130508986-20f4fd870b4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
        <p>
          유기농 면으로 만든 메쉬 스트링 에코백을 소개합니다.
          <br />
          가볍고 시원한 느낌을 담은 네트모양의 에코백.
          <br />
          일상에서, 장을 볼때, 여행갈 때에 다양하게 연출할 수 있습니다.
        </p>
      </div>
    )
  }
}

export default ItemDesc