import React, { Component } from 'react'

import './ItemReview.scss'

class ItemReview extends Component {
  constructor() {
    super();
    this.state = {
      isHide: true,
      nestedComment: '',
      commentList: []
    }
  }

  showMore = () => {
    this.setState({
      isHide: !this.state.isHide
    })
  }

  inputHandler = (e) => {
    this.setState({
      nestedComment: e.target.value
    })
  }

  addComment = (evt) => {
    evt.preventDefault();
    const {commentList, nestedComment} = this.state
    this.setState({
      commentList: [...commentList, 
      {
        id: commentList.lenght +1,
        user: 'minddon',
        comment: nestedComment
      },
    ],
      nestedComment: ''
    })
  }

  render() {
    const {id, option, comment, imgUrl, userId, postedDate} = this.props;
    const {isHide, commentList, nestedComment} = this.state;

    return(
      <li className={`ItemReview ${isHide && "opened"}`}>
        <div className="reviewContent">
          <div onClick={() => this.showMore()}>
          <p>
            {option}
          </p>
          <p>
            {comment}
          </p>
          {imgUrl && <img alt={option} src={imgUrl} />}
          </div>
          
          <div className={isHide ? "addComment hide" : "addComment"}>
            <span>댓글 {commentList.length}</span>
            <ul>
              {commentList && commentList.map((item) => {
                return(
                  <li>
                    <p>{item.user}</p>
                    <p>{item.comment}</p>
                  </li>
                )
              })}
            </ul>

            <form>
              <input 
              onChange={this.inputHandler}
              value={nestedComment}
              className="commentInput" 
              type="text" 
              placeholder="로그인이 필요합니다." />
              <div>
                <input className="fileInput" type="file" />
                <button onClick={this.addComment} type="submit">
                  작성
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="userInfo">
          <p>
            {userId}
          </p>
          <p>
            {postedDate}
          </p>
        </div>
      </li>
    )
  }
}

export default ItemReview