import React, { Component } from 'react'

import OptionBox from '../../../OptionBox/OptionBox'

import './SelectedOption.scss'

class SelectedOption extends Component {
  render() {
    const {selectedOne, minusQuantity, plusQunatity, deleteOption} = this.props

    return(
      <div className="SelectedOption">
        {selectedOne.map((option) => {
          return(
            <OptionBox 
            id={option.id}
            name={option.name}
            price={option.price}
            quantity={option.quantity}
            minusQuantity={minusQuantity}
            plusQunatity={plusQunatity}
            deleteOption={deleteOption}/>
          )
        })}
      </div>
    )
  }
}

export default SelectedOption