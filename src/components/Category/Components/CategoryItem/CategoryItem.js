import React from 'react'

import './CategoryItem.scss'

class CategoryItem extends React.Component {
  render() {
    const {category} = this.props
    return(
      <li className="CategoryItem">
        {category}
      </li>
    )
  }
}

export default CategoryItem;