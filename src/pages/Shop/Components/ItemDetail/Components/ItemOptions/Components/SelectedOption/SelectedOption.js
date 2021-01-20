import React, { Component } from 'react'
import OptionBox from '../../../OptionBox/OptionBox'
import './SelectedOption.scss'

class SelectedOption extends Component {
  render() {
    const {selectedOne, minusQuantity, plusQunatity, deleteOption, productList, controlProductQuantity, productQuantity} = this.props

    return(
      <>
      <div className="quantityBox">
        <label>{productList.product_name}</label>
        <div className="quantityForm">
          <button name="minus" onClick={controlProductQuantity}>-</button>
          <input 
          type="number" 
          value={productList.product_quantity}
          min="1" 
          max="10"/>
          <button name="plus" onClick={controlProductQuantity}>+</button>
        </div>
        <p>{`${productList.product_quantity*productList.product_price}원`}</p>
      </div>
      <div className="SelectedOption">
        {selectedOne.map((option) => {
          return(
            <OptionBox 
            id={option.option_id}
            name={option.option_name}
            price={option.option_price}
            quantity={option.option_quantity}
            minusQuantity={minusQuantity}
            plusQunatity={plusQunatity}
            deleteOption={deleteOption}/>
          )
        })}
      </div>
      </>
    )
  }
}

export default SelectedOption