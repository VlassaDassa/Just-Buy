import React, { useState } from 'react';

import './index.scss';
import trash from '../../../assets/images/cart/trash.svg';





const ChoiceSize = ({ 
        onChange, 
        onDelete, 
        selectedField, 
        handleFieldChange, 
        handleAddSizeField, 
        value, 
        setValue, 
        sizeFields, 
        index, 
        setFirstClick 
    }) => {

    const [valueInput, setValueInput] = useState('')
    const [isInputFilled, setIsInputFilled] = useState(false)


    const handleValueChange = (e) => {
        setValue(e.target.value);
        onChange(e.target.value);
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


    const handleAddSizeClick = () => {
        if (isInputFilled) {
            handleAddSizeField()
        } else {
            setFirstClick(true)
        }
    };
    

    return (

        <div className="small_column__row">

            <div className="general_characteristics__item_wrapper">
                <label value={selectedField} onChange={handleFieldChange} className="general_characteristics__label" htmlFor="size">Размер</label>

                <select value={value} onChange={handleValueChange} id="size" className="general_characteristics__input">
                    {/* TODO API */}
                    <option value="1">41-43</option>
                    <option value="2">39-41</option>
                    <option value="3">44-46</option>
                </select>
            </div>

            <div className="general_characteristics__item_wrapper">
                <label className="general_characteristics__label" htmlFor="count">Количество</label>

                <input 
                    onChange={handleValueInputChange}
                    value={valueInput}
                    type="text" 
                    id="count__size" 
                    className="general_characteristics__input"
                />
            </div>

            {index === sizeFields.length - 1 && (
                <div className="icon add_product__color circle" onClick={handleAddSizeClick}>
                    <div className="add_product__color plus"></div>
                </div>
            )}

            {index === 0 && sizeFields.length > 1 && (
                <img
                src={trash}
                className="icon add_product__trash"
                onClick={handleDeleteClick}
                alt='...'
              />
            )}

            {index > 0 && index !== sizeFields.length - 1 &&(
                <img
                src={trash}
                className="icon add_product__trash"
                onClick={handleDeleteClick}
                alt='...'
              />
            )}
        </div>
    );
};

export default ChoiceSize;