import React, { Component } from 'react'

import OptionBox from '../../../OptionBox/OptionBox'

import './SelectedOption.scss'

class SelectedOption extends Component {
  render() {
    const {selectedOne} = this.props
    return(
      <div className="SelectedOption">
        {selectedOne.map((option) => {
          return(
            <OptionBox 
            id={option.id}
            name={option.name}
            price={option.price}/>
          )
        })}
      </div>
    )
  }
}

export default SelectedOption