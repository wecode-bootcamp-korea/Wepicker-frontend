import React, {Component} from 'react'
import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import WishItem from './Componenets/WishItem'
import './WishList.scss'

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      wishList: []
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

  render() {
    const {wishList} = this.state;

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