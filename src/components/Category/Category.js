import React from 'react'

import CategoryItem from './Components/CategoryItem/CategoryItem'

import './Category.scss'

const CATEGORIES = ['카테고리', 'SHOP ALL', 'LIVING', 'KITCHEN'];
class Category extends React.Component {
  render() {
    return(
      <ul className="Category">
        {CATEGORIES.map((category, idx) => {
          return(
            <CategoryItem key={idx} category={category} />
          )
        })}
      </ul>
    )
  }
}

export default Category