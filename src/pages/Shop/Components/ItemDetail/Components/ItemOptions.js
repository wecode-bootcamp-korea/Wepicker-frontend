import React from 'react'

import './ItemOptions.scss'

class ItemOptios extends React.Component {
  render() {
    return(
      <div className="optionBox">
        <label>선택</label>
        <select name="options">
          <option value="defaultOption">--옵션을 선택 해주세요--</option>
          {/* 여기서 데이터 받아서 맵 돌리기 */}
        </select>
      </div>
    )
  }
}

export default ItemOptios