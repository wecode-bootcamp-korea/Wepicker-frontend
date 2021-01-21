import React from 'react'
import CategoryItem from './Components/CategoryItem/CategoryItem'
import './Category.scss'
class Category extends React.Component {
  render() {
    const {selectCategory}  = this.props
    return(
      <ul className="Category">
        {Object.entries(CATEGORIES).map((category, idx) => {
          return(
            <CategoryItem
            key={idx} 
            category={category[0]}
            url={category[1]}
            selectCategory={selectCategory} />
          )
        })}
      </ul>
    )
  }
}

export default Category

const CATEGORIES = 
{
  '카테고리': '',
  'SHOP': '',
  'LIVING': 1,
  'KITCHEN': 2
} 