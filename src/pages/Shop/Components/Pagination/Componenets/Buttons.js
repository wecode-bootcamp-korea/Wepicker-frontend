import React, { Component } from 'react'

import './Buttons.scss'

class Buttons extends Component {
  render() {
    const {paginationHandler, idx} = this.props

    return(
      <button data-idx={idx} onClick={() => paginationHandler(idx+1)}>
        {idx+1}
      </button>
    )
  }
}

export default Buttons