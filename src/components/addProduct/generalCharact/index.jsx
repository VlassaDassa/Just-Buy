import React from "react";

import SelectCategory from "../selectCategory";

import "./index.scss";





const GeneralCharact = ({ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory }) => {


    return (
        <div className="general_characteristics">
            <div className="general_characteristics__couple_wrapper">
                <div className="general_characteristics__item_wrapper">
                    <label className="general_characteristics__label" htmlFor="name">Название</label>
                    <input type="text" id="name" className="general_characteristics__input" />
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
                        <input type="text" id="price" className="general_characteristics__input" />
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
            <textarea name="description" id="description" className="general_characteristics__input" cols="30" rows="10"></textarea>

        </div>
    )
}

export default GeneralCharact;