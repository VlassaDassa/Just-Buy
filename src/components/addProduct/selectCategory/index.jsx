import React, { useState } from 'react';

import ChoiceField from '../choiceField';

import { category_fields } from '../../../fakeVar';






const SelectCategory = ({ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory }) => {
    const [selectedField, setSelectedField] = useState('');

    const [colorFieldVisible, setColorFieldVisible] = useState(false);
    const [sizeFieldVisible, setSizeFieldVisible] = useState(false);



    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
    };


    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);

        const category = category_fields.find((category) => category.name_category === newCategory);
        if (category) {
            setSelectedSubcategory(category.subcategories && category.subcategories.length > 0 ? category.subcategories[0].name : '');
            setColorFieldVisible(category.color_field);
            setSizeFieldVisible(category.size_field);
        } else {
            setSelectedSubcategory('');
            setColorFieldVisible(false);
            setSizeFieldVisible(false);
        }
        setSelectedField('');
    }


    const handleSubcategoryChange = (e) => {
        const newSubcategory = e.target.value;
        setSelectedSubcategory(newSubcategory);
        setSelectedField('');
    }





    return (
        <>
            <div className="general_characteristics__couple_wrapper">
                <div className="general_characteristics__item_wrapper">

                    <label className="general_characteristics__label" htmlFor="category">
                        Категория
                    </label>

                    <select
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        id={selectedCategory && selectedSubcategory ? 'category' : 'category_without_subcategory'}
                        className="general_characteristics__input"
                    >
                        {category_fields.map((category, index) => (
                            <option key={index} value={category.name_category}>
                                {category.label_name}
                            </option>
                        ))}
                    </select>

                </div>

                
                {selectedCategory && category_fields.find((category) => category.name_category === selectedCategory)?.subcategories ? (
                    <div className="general_characteristics__item_wrapper">
                        {selectedSubcategory && (
                            <label className="general_characteristics__label" htmlFor="subcategory">
                                Подкатегория
                            </label>
                        )}

                        {selectedSubcategory && (
                            <select
                                value={selectedSubcategory}
                                onChange={handleSubcategoryChange}
                                id="subcategory"
                                className="general_characteristics__input"
                            >
                                {category_fields
                                    .find((category) => category.name_category === selectedCategory)
                                    .subcategories.map((subcategory, index) => (

                                        <option key={index} value={subcategory.name}>
                                            {subcategory.label_name}
                                        </option>
                                ))}
                            </select>
                        )}
                    </div>
                )
                :
                (
                    <div className="general_characteristics__item_wrapper general_characteristics__item_wrapper--hidden">
                            <label className="general_characteristics__label" htmlFor="subcategory">
                                Подкатегория
                            </label>

                            <select>
                                <option>
                                    empry
                                </option>
                            </select>
                    </div> 
                )
            }
                
            </div>
               
             
            <ChoiceField
                selectedField={selectedField}
                handleFieldChange={handleFieldChange} 
                colorFieldVisible={colorFieldVisible}
                sizeFieldVisible={sizeFieldVisible}
            />
        </>
    );
};

export default SelectCategory;