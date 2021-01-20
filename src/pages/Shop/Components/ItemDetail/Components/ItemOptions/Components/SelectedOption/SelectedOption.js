import React, { Component } from 'react'

import OptionBox from '../../../OptionBox/OptionBox'

import './SelectedOption.scss'

class SelectedOption extends Component {
  render() {
    const {selectedOne, minusQuantity, plusQunatity, deleteOption, productId, productName, productPrice} = this.props

    return(
      <>
      <div className="quantityBox">
        <label>{productName}</label>
        <div className="quantityForm">
          <button onClick={() => minusQuantity(productId)}>-</button>
          <input type="number" 
          value="1"
          min="1" 
          max="10"/>
          <button onClick={() => plusQunatity(productId)}>+</button>
        </div>
        {/* <p>{`${quantity*productPrice}원`}</p> */}
        <button onClick={() => deleteOption(productId)} type="button" className="deleteBtn">
          {/* <img alt="deleteBtn" src={xMark} /> */}
        </button> 
      </div>
      <div className="SelectedOption">
        {selectedOne.map((option) => {
          return(
            <OptionBox 
            id={option.option_id}
            name={option.option_name}
            price={option.option_price}
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