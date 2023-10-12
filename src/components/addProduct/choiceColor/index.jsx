import React, { useState } from 'react';

import trash from '../../../assets/images/cart/trash.svg';





const ChoiceColor = ({ 
        onChange, 
        onDelete, 
        selectedField, 
        handleFieldChange, 
        handleAddColorField, 
        index, 
        colorFields, 
        setFirstClick, 
        value, 
        setValue 
    }) => {

    const [valueInput, setValueInput] = useState('')
    const [isInputFilled, setIsInputFilled] = useState(false)
    

    const handleValueChange = (e) => {
        setValue(e.target.value)
        onChange(e.target.value)
    };


    const handleValueInputChange = (e) => {
        const inputValue = e.target.value
        setValueInput(e.target.value)
        onChange(e.target.value)

        setIsInputFilled(inputValue.trim() !== '')
    }


    const handleDeleteClick = () => {
        onDelete(index)
        setValueInput('')
    };


    const handleAddColorClick = () => {
        if (isInputFilled) {
            handleAddColorField()
        } else {
            setFirstClick(true)
        }
    };




    
    return (
        <div className="small_column__row">

            <div className="general_characteristics__item_wrapper">

                <label value={selectedField} onChange={handleFieldChange} className="general_characteristics__label" htmlFor="color">Цвет</label>
                
                <select id="color" value={value} onChange={handleValueChange} className="general_characteristics__input">
                    {/* TODO API */}
                    <option value="yellow">Желтый</option>
                    <option value="red">Красный</option>
                    <option value="black">Черный</option>
                </select>

            </div>

            <div className="general_characteristics__item_wrapper">
                <label className="general_characteristics__label" htmlFor="count">Количество</label>
                <input
                    onChange={handleValueInputChange}
                    value={valueInput}
                    type="text"
                    id="count"
                    className="general_characteristics__input"
                />
            </div>

            {index === colorFields.length - 1 && (
                <div className="icon add_product__color circle" onClick={handleAddColorClick}>
                    <div className="add_product__color plus"></div>
                </div>
            )}

            {index === 0 && colorFields.length > 1 && (
                <img
                src={trash}
                className="icon add_product__trash"
                onClick={handleDeleteClick}
                alt='...'
              />
            )}

            {index > 0 && index !== colorFields.length - 1 &&(
                <img
                src={trash}
                className="icon add_product__trash"
                onClick={handleDeleteClick}
                alt='...'
              />
            )}
            
        </div>

    )
}

export default ChoiceColor;