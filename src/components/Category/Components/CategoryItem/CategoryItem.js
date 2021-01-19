import React from 'react'

import './CategoryItem.scss'

class CategoryItem extends React.Component {
  render() {
    const {category, selectCategory, url} = this.props

    return(
      <li onClick={() => selectCategory(url)} className="CategoryItem">
        {category}
      </li>
    )
  }
}

export default CategoryItem;