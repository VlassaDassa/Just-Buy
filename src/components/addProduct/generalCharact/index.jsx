import React, { useState, useRef } from "react";
import { observer } from 'mobx-react-lite';

import SelectCategory from "../selectCategory";

import { containsNumber } from "../../../services/services";
import useRegisterInputRefs from "../../../hooks/useRegisterInputRefs";
import { defineErrorClass } from "../../../services/services";




const GeneralCharact = observer(({ 
        selectedCategory, 
        setSelectedCategory, 
        selectedSubcategory, 
        setSelectedSubcategory, 
        categories,

        subcategories,
        setSubcategories,
    }) => {
    const [isNameValue, setIsNameValue] = useState('')
    const [isPriceValue, setIsPriceValue] = useState('')
    const [isDescriptionValue, setIsDescriptionValue] = useState('')

    const inputRefs = {
        'name': useRef(),
        'price': useRef(),
        'description': useRef(),
    }

    // Register inputs for error checking
    useRegisterInputRefs(inputRefs)


    const handleNameField = (event) => {
        setIsNameValue(event.target.value)
    }

    
    const handleDescriptionField = (event) => {
        setIsDescriptionValue(event.target.value)
    }


    const handlePriceField = (event) => {
        const value = event.target.value
        
        if (containsNumber(value)) {
            setIsPriceValue(value)
        }
    }


    return (
        <div className="general_characteristics">
            <div className="general_characteristics__couple_wrapper">
                <div className="general_characteristics__item_wrapper">
                    <label className="general_characteristics__label" htmlFor="name">Название</label>
                    <input 
                        type="text" 
                        id="name"
                        ref={inputRefs['name']}
                        className={defineErrorClass('name')} 
                        value={isNameValue} 
                        onChange={() => handleNameField(event)} 
                    />
                </div>
                
                <div className="general_characteristics__item_wrapper--hidden">
                    <label className="general_characteristics__label" htmlFor="name">Название</label>
                    <input type="text" id="hidden" className="general_characteristics__input" />
                </div>
            </div>
            

            <div className="general_characteristics__couple_wrapper">
                <div className="general_characteristics__item_wrapper">
                    <label className="general_characteristics__label" htmlFor="price">Цена за 1 шт.</label>

                    <div className="input_ico_wrapper">
                        <input
                            type="text" 
                            id="price"
                            ref={inputRefs['price']}
                            className={defineErrorClass('price')}
                            value={isPriceValue} 
                            onChange={() => handlePriceField(event)} 
                        />
                        <span className="price_ico">₽</span>
                    </div>
                </div>
            </div>

            <SelectCategory
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSubcategory={selectedSubcategory}
                setSelectedSubcategory={setSelectedSubcategory}

                categories={categories}
                subcategories={subcategories}
                setSubcategories={setSubcategories}
            />

            <label className="general_characteristics__label" htmlFor="description">Описание</label>
            <textarea
                name="description" 
                id="description" 
                value={isDescriptionValue} 
                className={defineErrorClass('description')} 
                ref={inputRefs['description']}
                cols="30" 
                rows="10"
                onChange={() => handleDescriptionField(event)}
            >
            </textarea>

        </div>
    )
})

export default GeneralCharact;