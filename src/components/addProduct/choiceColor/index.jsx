import React, { useState, useRef, useEffect} from 'react';
import { observer } from 'mobx-react-lite';

import { containsNumber } from "../../../services/services";
import useRegisterInputRefs from "../../../hooks/useRegisterInputRefs";
import { defineErrorClass } from '../../../services/services';

import trash from '../../../assets/images/cart/trash.svg';





const ChoiceColor = observer(({ 
        onChange, 
        onDelete, 
        selectedField,
        setColorFields,
        handleFieldChange, 
        index, 
        colorFields, 
        setFirstClick, 

        selectColor,
        setSelectColor,

        selectedCategory,
    }) => {

    const [valueInput, setValueInput] = useState({})
    const [isInputFilled, setIsInputFilled] = useState(false)


    // For checking fields
    const inputRefs = {
        ['choiceColor_' + index]: useRef()
    } 
    useRegisterInputRefs(inputRefs)


    // Initial values
    useEffect(() => {
        setSelectColor({
            ...selectColor,
            ['choiceColor_' + index]: {value: 'yellow', count: ''}
        })
    }, [selectedCategory])


    // Adding color field with initial values
    const handleAddColorField = () => {
        setColorFields([...colorFields, {['choiceColor_' + index]: {value: 'red', count: ''}}])
        setFirstClick(true)
    }


    // Making dictionary with needed data
    const setColorValue = (e) => {
        const newValues = {
            'value': e.target.value,
            'count': valueInput['choiceColor_' + index]
        }
        
        setSelectColor({
            ...selectColor,
            ['choiceColor_' + index]: newValues
        });
    }


    // Handling choicing colors
    const handleValueChange = (e) => {
        setColorValue(e)
        onChange(e.target.value)
    };


    // Handling enter count
    const handleValueInputChange = (e) => {
        const inputValue = e.target.value
        if (containsNumber(inputValue)) {
            const newValues = {
                'value': selectColor['choiceColor_' + index].value,
                'count': inputValue
            }
            
            setSelectColor({
                ...selectColor,
                ['choiceColor_' + index]: newValues
            });

            onChange(inputValue)
            setIsInputFilled(inputValue.trim() !== '')
        }
    }


    const handleDeleteClick = () => {
        onDelete(index)
        setValueInput('')
    };


    const handleAddColorClick = () => {
        if (isInputFilled) {
            handleAddColorField()
        } 
        
        else {
            setFirstClick(true)
        }
    };


    
    return (
        <div className="small_column__row">

            <div className="general_characteristics__item_wrapper">

                <label value={selectedField} onChange={handleFieldChange} className="general_characteristics__label" htmlFor="color">Цвет</label>
                
                <select id="color" value={selectColor['choiceColor_' + index]?.value || ''} onChange={handleValueChange} className="general_characteristics__input">
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
                    value={selectColor['choiceColor_' + index]?.count || ''}
                    type="text"
                    id="count"
                    ref={inputRefs['choiceColor_' + index]}
                    className={defineErrorClass('choiceColor_' + index)}
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
})

export default ChoiceColor;


