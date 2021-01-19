import React, { Component } from 'react'

import Buttons from './Componenets/Buttons'

import './Pagination.scss'

class Pagination extends Component {
  render() {
    const {paginationHandler, maxPage} = this.props
    return(
      <div className="Pagination">
        {
          [...Array(maxPage)].map((_, idx) => {
            return(
              <Buttons
              key={idx+1}
              idx={idx}
              paginationHandler={paginationHandler} />
            )
          })
        }
    </div>
    )
  }
}

export default Pagination