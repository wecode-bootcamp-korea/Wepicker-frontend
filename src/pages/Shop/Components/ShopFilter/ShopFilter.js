import React from 'react';

import './ShopFilter.scss'
class ShopFilter extends React.Component {
  render() {
    return(
        <select className="ShopFilter" name="ordering">
        {FILTER_MENU.map((menu) => {
          return(
            <option value={menu}>{menu}</option>
          )
        })}
      </select>
    )
  }
}

export default ShopFilter

const FILTER_MENU = ['등록순', '인기순', '낮은가격순', '높은가격순', '상품평 많은순', '이름순', '이름역순'];