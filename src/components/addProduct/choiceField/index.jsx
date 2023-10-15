import React, { useState } from 'react';

import ChoiceSize from '../choiceSize';
import ChoiceColor from '../choiceColor';






const ChoiceField = ({ 
        selectedField, 
        handleFieldChange, 
        colorFieldVisible, 
        sizeFieldVisible,

        selectColor,
        setSelectColor,

        selectSize,
        setSelectSize,

        colorFields,
        setColorFields,

        sizeFields,
        setSizeFields,

        selectedCategory,
    }) => {

    const [firstClick, setFirstClick] = useState(false)


    const handleDeleteColorField = (index) => {
        const newColorFields = [...colorFields]
        newColorFields.splice(index, 1)
        setColorFields(newColorFields)
    };


    const handleDeleteSizeField = (index) => {
        const newSizeFields = [...sizeFields]
        newSizeFields.splice(index, 1)
        setSizeFields(newSizeFields)
    };

    
    return (
        <>
            <div className="small_column small_column--color">
                {colorFieldVisible &&
                    colorFields.map((field, index) => (
                        <ChoiceColor
                            index={index}
                            key={index}

                            selectedCategory={selectedCategory}

                            selectColor={selectColor}
                            setSelectColor={setSelectColor}

                            colorFields={colorFields}
                            setColorFields={setColorFields}

                            selectedField={selectedField}
                            handleFieldChange={handleFieldChange}

                            setFirstClick={setFirstClick}
                            onChange={(value) => {
                                const newColorFields = [...colorFields];
                                newColorFields[index] = value;
                                setColorFields(newColorFields)
                            }}

                            onDelete={() => {
                                handleDeleteColorField(index);
                            }}

                        />
                    ))}

            </div>

            <div className="small_column small_column--size">
                {sizeFieldVisible &&
                    sizeFields.map((field, index) => (

                        <ChoiceSize
                            index={index}
                            key={index}

                            selectedCategory={selectedCategory}

                            selectSize={selectSize}
                            setSelectSize={setSelectSize}

                            sizeFields={sizeFields}
                            setSizeFields={setSizeFields}
                            
                            selectedField={selectedField}
                            handleFieldChange={handleFieldChange}

                            setFirstClick={setFirstClick}
                            onChange={(value) => {
                                const newSizeFields = [...sizeFields];
                                newSizeFields[index] = value;
                                setSizeFields(newSizeFields)
                            }}

                            onDelete={() => {
                                handleDeleteSizeField(index)
                            }}
                        />

                    ))}
            </div>
        </>

    );
};

export default ChoiceField;