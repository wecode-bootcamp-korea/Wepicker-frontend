import React, {Component} from 'react'
import './ItemOption.scss'

class ItemOption extends Component {
  render() {
    const {optionId, optionName, optionPrice} = this.props
    return(
      <option value={optionId}>
        {optionName}
        {optionPrice && `${parseInt(optionPrice)}원`}
      </option>
    )
  }
}

export default ItemOption