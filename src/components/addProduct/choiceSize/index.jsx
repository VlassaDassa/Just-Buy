import React, { useState, useRef, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import { containsNumber } from "../../../services/services";
import useRegisterInputRefs from "../../../hooks/useRegisterInputRefs";
import { defineErrorClass } from '../../../services/services';
import useRequest from '../../../hooks/useRequest';
import { getSizes } from '../../../api/addProductAPI';

import trash from '../../../assets/images/cart/trash.svg';




const ChoiceSize = observer(({ 
        onChange, 
        onDelete, 
        selectedField, 
        handleFieldChange, 
        sizeFields, 
        setSizeFields,
        index, 
        setFirstClick,

        selectedCategory,

        selectSize,
        setSelectSize,

    }) => {

    const [valueInput, setValueInput] = useState('')
    const [isInputFilled, setIsInputFilled] = useState(false)

    const [data, dataLoder, dataError] = useRequest(() => getSizes(), [])
    const [fields, setFields] = useState()

    useEffect(() => {
        if (data) {
            setFields(data)
        }
    }, [data, dataLoder])


    // For checking fields
    const inputRefs = {
        ['choiceSize_' + index]: useRef(),
        ['countSize_' + index]: useRef()
    } 
    useRegisterInputRefs(inputRefs)


    // Initial values
    useEffect(() => {
        setSelectSize({
            ...selectSize,
            ['choiceSize_' + index]: {value: '1', count: ''}
        })
    }, [selectedCategory])


    // Adding color field with initial values
    const handleAddSizeField = () => {
        setSizeFields([...sizeFields, {['choiceSize_' + index]: {value: '1', count: ''}}])
        setFirstClick(true)
    }


    // Making dictionary with needed data
    const setSizeValue = (e) => {
        const newValues = {
            'value': e.target.value,
            'count': valueInput['choiceSize_' + index]
        }
        
        setSelectSize({
            ...selectSize,
            ['choiceSize_' + index]: newValues
        });
    }

    
    // Handling choicing sizes
    const handleValueChange = (e) => {
        setSizeValue(e);
        onChange(e.target.value);
    };


    // Handling enter count
    const handleValueInputChange = (e) => {
        const inputValue = e.target.value

        if (containsNumber(inputValue)) {
            const newValues = {
                'value': selectSize['choiceSize_' + index].value,
                'count': inputValue
            }
            
            setSelectSize({
                ...selectSize,
                ['choiceSize_' + index]: newValues
            });

            onChange(inputValue)
            setIsInputFilled(inputValue.trim() !== '')
        }
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
                <label value={selectedField} onChange={handleFieldChange} className="general_characteristics__label" htmlFor="color">Размер</label>

                <select 
                    value={selectSize['choiceSize_' + index]?.value || ''} 
                    onChange={handleValueChange} 
                    id="color" 
                    className="general_characteristics__input"
                    ref={inputRefs['choiceSize_' + index]}
                >
                    {fields &&
                        fields.map((field) => (
                            <option key={field.size_value} value={field.size_value}>{field.size}</option>
                        ))
                    }
                </select>
            </div>

            <div className="general_characteristics__item_wrapper">
                <label className="general_characteristics__label" htmlFor="count">Количество</label>

                <input 
                    onChange={handleValueInputChange}
                    value={selectSize['choiceSize_' + index]?.count || ''}
                    type="text" 
                    id="count" 
                    ref={inputRefs['countSize_' + index]}
                    className={defineErrorClass('choiceSize_' + index)}
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
});

export default ChoiceSize;