import React from 'react'

import ItemOption from './Components/ItemOption/ItemOption'
import SelectedOption from './Components/SelectedOption/SelectedOption'

import './ItemOptions.scss'

class ItemOptios extends React.Component {
  render() {
    const {selectOption, selectedOne,  minusQuantity, plusQunatity} = this.props;

    return(
      <>
      <div className="optionBox">
        <label>선택</label>
        <select name="options" onChange={selectOption}>
          <option value="">--옵션을 선택 해주세요--</option>
          {
            OPTIONS.map((option) => {
              return (
               <ItemOption
               optionId={option.id}
               optionName={option.name} 
               optionPrice={option.price}/>
              )
            })
          }
          {/* 여기서 데이터 받아서 맵 돌리기 */}
        </select>
      </div>
      <div>
        {
          selectedOne && 
          <SelectedOption 
          selectedOne={selectedOne} 
          minusQuantity={minusQuantity} 
          plusQunatity={plusQunatity}/>
        }
      </div>
      </>
    )
  }
}

export default ItemOptios

const OPTIONS =
  [
    {
      id: 1,
      name: "organic string bag",
      quatity: 1,
      price: 11000
    },
    {
      id: 2,
      name: "wrapping service",
      quatity: 1,
      price: 4000
    }
  ]
