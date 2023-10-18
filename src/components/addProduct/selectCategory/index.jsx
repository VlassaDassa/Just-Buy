import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import addProductChecking from '../../../store/addProductChecking';

import ChoiceField from '../choiceField';





const SelectCategory = observer(({ 
        selectedCategory, 
        setSelectedCategory, 
        selectedSubcategory, 
        setSelectedSubcategory,

        categories, 

        subcategories, 
        setSubcategories,

        characteristicsFields,
    }) => {


    const [selectedField, setSelectedField] = useState('');

    const [colorFieldVisible, setColorFieldVisible] = useState(false);
    const [sizeFieldVisible, setSizeFieldVisible] = useState(false);

    const [selectColor, setSelectColor] = useState({});
    const [selectSize, setSelectSize] = useState({});

    const [colorFields, setColorFields] = useState([null])
    const [sizeFields, setSizeFields] = useState([null])


    // Handling photo field
    const handleFieldChange = (e) => {
        setSelectedField(e.target.value);
    };


    useEffect(() => {
        if (characteristicsFields?.color && selectedCategory.category_id != 'nonSelect') {
            setColorFieldVisible(true)
        }
        else {
            setColorFieldVisible(false)
        }

        if (characteristicsFields?.size && selectedCategory.category_id != 'nonSelect') {
            setSizeFieldVisible(true)
        }
        else {
            setSizeFieldVisible(false)
        }
    }, [characteristicsFields, selectedCategory])

    

    // Handling category field
    const handleCategoryChange = (e) => {
        addProductChecking.setBtnClicked(false);

        // Clear old 'choiceFields'
        setSelectColor({})
        setSelectSize({})

        setColorFields([null])
        setSizeFields([null])

        const newCategory = categories.find((category) => String(category.category_id) === String(e.target.value))

        if (newCategory) {
            setSelectedCategory(newCategory);
        }

        if (String(e.target.value) === "nonSelect") {
            setSubcategories(null)
        }

        setSelectedField('');
    }


    // Handling subcategory field
    const handleSubcategoryChange = (e) => {
        addProductChecking.setBtnClicked(false);

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
                        value={selectedCategory.category_id}
                        onChange={handleCategoryChange}
                        id={selectedCategory ? 'category' : 'category_without_subcategory'}
                        className="general_characteristics__input"
                    >
                        {categories.map((category) => (
                            <option key={'category_' + category.category_id} value={category.category_id}>
                                {category.category_name}
                            </option>
                         ))}
                    </select>
                </div>

                
                {subcategories ? (
                    <div className="general_characteristics__item_wrapper">
                        <label className="general_characteristics__label" htmlFor="subcategory">
                            Подкатегория
                        </label>

                        <select
                            value={selectedSubcategory}
                            onChange={handleSubcategoryChange}
                            id="subcategory"
                            className="general_characteristics__input"
                        >
                            {
                                subcategories.map((subcategory, index) => (
                                    <option key={index} value={subcategory.subcategory_id}>
                                        {subcategory.subcategory_name}
                                    </option>
                                ))
                            }
                        </select>
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
                                    empty
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

                selectColor={selectColor}
                setSelectColor={setSelectColor}

                colorFields={colorFields}
                setColorFields={setColorFields}

                selectSize={selectSize}
                setSelectSize={setSelectSize}

                sizeFields={sizeFields}
                setSizeFields={setSizeFields}

                selectedCategory={selectedCategory}

                characteristicsFields={characteristicsFields}
            />
        </>
    );
});

export default SelectCategory;