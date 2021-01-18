import React, {Component} from 'react';

import './ShopFilter.scss'
class ShopFilter extends Component {
  render() {
    const {selectFilter} = this.props
    return(
        <select onChange={selectFilter} className="ShopFilter" name="ordering">
        {
          Object.entries(FILTER_MENU).map((menu, idx) => {
            return (
              <option key={idx+1} value={menu[1]}>
                {menu[0]}
              </option>
            )
          })
        }
      </select>
    )
  }
}

export default ShopFilter

const FILTER_MENU =
  {
  '등록순': 'recent', 
  '인기순': 'best',
  '낮은가격순': 'min_price',
  '높은가격순': 'max_price',
  '이름순': 'abc',
  '이름역순': 'descabc'};