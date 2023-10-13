import React, { useState } from "react";

import SelectCategory from "../selectCategory";

import { containsNumber } from "../../../services/services";






const GeneralCharact = ({ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory }) => {
    const [isNameValue, setIsNameValue] = useState('')
    const [isPriceValue, setIsPriceValue] = useState('')
    const [isDescriptionValue, setIsDescriptionValue] = useState('')

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
                        className="general_characteristics__input" 
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
                            className="general_characteristics__input" 
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
            />

            <label className="general_characteristics__label" htmlFor="description">Описание</label>
            <textarea
                name="description" 
                id="description" 
                value={isDescriptionValue} 
                className={isDescriptionValue.length > 1 && isDescriptionValue.length < 300 ? "general_characteristics__input error" : "general_characteristics__input"} 
                cols="30" 
                rows="10"
                onChange={() => handleDescriptionField(event)}
            >
            </textarea>

        </div>
    )
}

export default GeneralCharact;