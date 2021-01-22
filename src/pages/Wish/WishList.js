import React, {Component} from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import WishItem from './Componenets/WishItem'
import './WishList.scss'

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      wishList: [],
      isHovered: false
    }
  }

  componentDidMount() {
    fetch('/data/wishList.json')
    .then((res) => res.json())
    .then((data) => {
      this.setState({
        wishList: data.wishList
      })
    })
  }

  // hoverImg = (evt, hoveredId) => {
  //   const {wishList} = this.state;
  //   if(evt.target.id === hoveredId) {
  //     const newArr = wishList.filter((item) => item.id === hoveredId)
  //     .map((item) => {
  //       return item["isHovered"] = true
  //       console.log(newArr)
  //     })
  //   }
  // }

  deleteWish = (selectedId) => {
    const {wishList} = this.state
    const newList = wishList.filter((item) => item.id !== selectedId)
    this.setState({
      wishList: newList
    })
  }

  render() {
    const {wishList, isHovered} = this.state;

    return(
      <>
      <Nav />
      <section className="WishList">
        <div className="container">
          <div className="headerSection">
            <h1>위시리스트</h1>
            <span>{wishList.length}</span>
          </div>
          <div className="itemContainer">
            {
              wishList.length > 0 && wishList.map((item) => {
                return(
                  <WishItem 
                  key={item.productId}
                  id={item.productId}
                  name={item.productName}
                  price={item.productPrice}
                  url={item.url}
                  isHovered={isHovered}
                  hoverImg={this.hoverImg}
                  deleteWish={this.deleteWish}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
      <Footer />
      </>
    )
  }
}

export default WishList