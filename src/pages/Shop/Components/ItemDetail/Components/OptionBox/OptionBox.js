import React, { Component } from 'react'

import xMark from '../../../../../../images/OptionBox/x-mark.png'
import './OptionBox.scss'

class OptionBox extends Component {
  render() {
    const {id, name, price, quantity, minusQuantity, plusQunatity, deleteOption} = this.props
    return(
      <div className="quantityBox">
        <label>{name}</label>
        {
          price && <div className="quantityForm">
          <button onClick={() => minusQuantity(id)}>-</button>
          <input 
          type="number" 
          value={quantity} 
          min="1" 
          max="10"/>
          <button onClick={() => plusQunatity(id)}>+</button>
        </div>
        }
        {
          price && <p>{`${quantity*price}원`}</p>
        }
        <button onClick={() => deleteOption(id)} type="button" className="deleteBtn">
          <img alt="deleteBtn" src={xMark} />
        </button> 
      </div>
    )
  }
}

export default OptionBox