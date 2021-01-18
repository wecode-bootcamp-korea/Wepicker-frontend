import React from 'react'

import './BestItem.scss'

class BestItem extends React.Component {

  render() {
    const {name, thumnailImage} = this.props;
    return(
          <li className="BestItem">
            <img alt={name} src={thumnailImage} />
            <p>{name}</p>
          </li>
    )
  }
}

export default BestItem