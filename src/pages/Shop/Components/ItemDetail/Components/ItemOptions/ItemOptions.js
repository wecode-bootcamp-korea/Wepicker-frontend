import React from 'react'

import ItemOption from './Components/ItemOption/ItemOption'
import SelectedOption from './Components/SelectedOption/SelectedOption'

import './ItemOptions.scss'

class ItemOptios extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOne: []
    }
  }

  selectOption = (evt) => {
    const selectedValue = evt.target.value;
    const optionArr = OPTIONS.filter(option => option.id === parseInt(selectedValue))
    const {selectedOne} = this.state;

    this.setState({
      selectedOne: [
        ...selectedOne,
        ...optionArr
      ]
    })

    const checkId = selectedOne.some((option) => option.id === parseInt(selectedValue))
    if(checkId) {
      alert('이미 선택된 옵션입니다.')
      const newArr = selectedOne.filter((option) => option.id === parseInt(selectedValue))
      const arr = selectedOne.filter((option) => option.id !== parseInt(selectedValue))
      console.log(newArr)
      this.setState({
        selectedOne: [
          ...newArr,
          ...arr
        ]
      })
      return;
    } else {
      this.setState({
        selectedOne: [
          ...selectedOne,
          ...optionArr
        ]
      })
    }
  }


  render() {
    const {selectedOne} = this.state;
    console.log(selectedOne)
    return(
      <>
      <div className="optionBox">
        <label>선택</label>
        <select name="options" onChange={this.selectOption}>
          <option value="">--옵션을 선택 해주세요--</option>
          {
            OPTIONS.map((option) => {
              return (
               <ItemOption
               optionId={option.id}
               optionName={option.name} 
               optionPrice={option.price}/>
              )
            })
          }
          {/* 여기서 데이터 받아서 맵 돌리기 */}
        </select>
      </div>
      <div>
        {
          selectedOne && <SelectedOption selectedOne={selectedOne}/>
        }
      </div>
      </>
    )
  }
}

export default ItemOptios

const OPTIONS =
  [
    {
      id: 1,
      name: "organic string bag",
      price: 11000
    },
    {
      id: 2,
      name: "wrapping service",
      price: 4000
    }
  ]