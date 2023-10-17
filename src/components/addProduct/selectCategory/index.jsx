import React, { useState } from 'react';

import ChoiceField from '../choiceField';





const SelectCategory = ({ 
        selectedCategory, 
        setSelectedCategory, 
        selectedSubcategory, 
        setSelectedSubcategory, 
        categories, 
        subcategories, 
        setSubcategories 
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

    console.log(selectedField)


    // Handling category field
    const handleCategoryChange = (e) => {
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

        // if (newCategory) {
        //     setSelectedCategory(newCategory);
            // setSelectedSubcategory(category.subcategories && category.subcategories.length > 0 ? category.subcategories[0].name : '');
            // setColorFieldVisible(category.color_field);
            // setSizeFieldVisible(category.size_field);
        // } else {
            // setSelectedSubcategory('');
            // setColorFieldVisible(false);
            // setSizeFieldVisible(false);
        // }

        setSelectedField('');
    }


    // Handling subcategory field
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
            />
        </>
    );
};

export default SelectCategory;