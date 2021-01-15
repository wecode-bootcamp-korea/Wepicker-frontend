import React, { Component } from 'react'

import xMark from '../../../../../../images/OptionBox/x-mark.png'
import './OptionBox.scss'

class OptionBox extends Component {
  constructor() {
    super();
    this.state = {
      quantityValue: 1
    }
  }

  minusQuantity = () => {
    this.setState({
      quantityValue: this.state.quantityValue -1
    })
  }

  plusQunatity = () => {
    this.setState({
      quantityValue: this.state.quantityValue +1
    })
  }

  render() {
    const {quantityValue} = this.state
    const {selectedName, selectedPrice} = this.props

    return(
      <div className="quantityBox">
        <label>{selectedName}</label>
          <div className="quantityForm">
            <button onClick={this.minusQuantity}>-</button>
            <input type="number" value={quantityValue} min="1" max="10"/>
            <button onClick={this.plusQunatity}>+</button>
          </div>
          <p>{`${selectedPrice}원`}</p>
          <button className="deleteBtn">
            <img alt="delete" src={xMark} />
          </button>
      </div>
    )
  }
}

export default OptionBox