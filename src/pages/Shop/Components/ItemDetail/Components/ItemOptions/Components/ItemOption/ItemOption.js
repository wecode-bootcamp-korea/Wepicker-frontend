import React, {Component} from 'react'

import './ItemOption.scss'

class ItemOption extends Component {
  render() {
    const {optionId, optionName, optionPrice} = this.props
    return(
      <option value={optionId}>
        {optionName}
        {optionPrice}
      </option>
    )
  }
}

export default ItemOption