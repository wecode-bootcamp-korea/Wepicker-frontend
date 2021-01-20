import React, {Component} from 'react'
import ItemReview from './Components/ItemReview'
import './ItemReviewList.scss'

class ItemReviewList extends Component {
  constructor() {
    super();
    this.state = {
      reviewList: []
    }
  }

  componentDidMount() {
    fetch('/data/itemReview.json')
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          reviewList: data["ITEM_REVIEW"]
        })
      })
  }

  render() {
    const {reviewList} = this.state;
    return(
      <section className="ItemReviewList">
        <button type="button">구매평 작성</button>
        <ul>
          {reviewList && reviewList.map((data) => {
            return(
              <ItemReview key={data.id} id={data.id} star={data.star} option={data.option}
              comment={data.comment} imgUrl={data.imgUrl} userId={data.userId}
              postedDate={data.postedDate} />
            )
          })}
        </ul>
      </section>
    )
  }
}

export default ItemReviewList