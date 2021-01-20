import React from 'react'

import ItemOption from './Components/ItemOption/ItemOption'
import SelectedOption from './Components/SelectedOption/SelectedOption'

import './ItemOptions.scss'

class ItemOptios extends React.Component {
  render() {
    const {selectOption, selectedOne, minusQuantity, plusQunatity, deleteOption, optionList, productList} = this.props;

    return(
      <>
      <div className="optionBox">
        <label>선택</label>
        <select name="options" onChange={selectOption}>
          <option value="">--옵션을 선택 해주세요--</option>
          {
            optionList && optionList.map((option) => {
              return (
               <ItemOption
               key={option.option_id}
               optionId={option.option_id}
               optionName={option.option_name} 
               optionPrice={option.option_price}

               />
              )
            })
          }
        </select>
      </div>
      <div>
        {
          selectedOne && 
          <SelectedOption 
          selectedOne={selectedOne} 
          minusQuantity={minusQuantity} 
          plusQunatity={plusQunatity}
          deleteOption={deleteOption}
          productId={productList.product_id}
          productName={productList.product_name}
          productPrice={productList.product_price}/>
        }
      </div>
      </>
    )
  }
}

export default ItemOptios