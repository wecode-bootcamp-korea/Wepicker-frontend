import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import ItemDesc from '../ItemDesc/ItemDesc'
import ItemReviewList from '../ItemReviewList/ItemReviewList'
import ItemAsk from '../ItemAsk/ItemAsk'
import './ItemDetailMenu.scss'

class ItemDetailMenu extends Component {
  constructor() {
    super();
    this.state = {
      currentTab: 1
    }
  }

  clickHandler = (selectedId) => {
    this.setState({
      currentTab: selectedId
    })
  }

  render() {
    const {currentTab} = this.state;
    const {productList} = this.props;

    return (
      <section className="ItemDetailMenu">
        <ul className="ItemDetailMenuList">
          {MENU_TABS.map((tab, idx) => {
            return(
              <li className="menuTab" key={idx+1} onClick={() => this.clickHandler(idx+1)}>
                {tab}
              </li>
            )
          })}
        </ul>
        <section className="tabContent">
          <div>
            {TAB_COMPONENTS[currentTab]}
          </div>
        </section>
      </section>
    )
  }
}

export default ItemDetailMenu

const MENU_TABS = [
  "상세정보",
  "구매평",
  "Q&A"
];

const TAB_COMPONENTS = {
  1: <ItemDesc />,
  2: <ItemReviewList />,
  3: <ItemAsk />
}