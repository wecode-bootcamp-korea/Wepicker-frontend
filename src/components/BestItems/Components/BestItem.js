import React from 'react'

import './BestItem.scss'

class BestItem extends React.Component {

  render() {
    const {name, url} = this.props;
    // console.log(this.props)
    return(
          <li className="BestItem">
            <img alt={name} src={url} />
            <p>{name}</p>
          </li>
    )
  }
}

export default BestItem