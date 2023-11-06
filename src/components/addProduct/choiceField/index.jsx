import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import ChoiceSize from '../choiceSize';
import ChoiceColor from '../choiceColor';

import relateSizeAndColor from '../../../store/relateSizeAndColor';
import addProductChecking from '../../../store/addProductChecking';
import overlay from '../../../store/overlay';






const ChoiceField = observer(({ 
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

        characteristicsFields,
    }) => {

    const [firstClick, setFirstClick] = useState(false)

    

    const handleDeleteColorField = (index) => {
        const newColorFields = [...colorFields]
        newColorFields.splice(index, 1)
        setColorFields(newColorFields)

        addProductChecking.deleteColor()
    };


    const handleDeleteSizeField = (index) => {
        const newSizeFields = [...sizeFields]
        newSizeFields.splice(index, 1)
        setSizeFields(newSizeFields)

        addProductChecking.deleteSize()
    };


    const openRelateSizeColor = () => {
        relateSizeAndColor.toggleShow(true)
        overlay.toggleShow(true)
    }


    if (colorFieldVisible && characteristicsFields.color && sizeFieldVisible && characteristicsFields.size) {
        return (
            <div className="relateSizeAndColor">
                <label className="general_characteristics__label">Размер и цвет</label>
                <p className="openRelateSizeAndColor" onClick={openRelateSizeColor}>Настроить</p>
            </div>
        )
    }

    
    return (
        <>
            <div className="small_column small_column--color">
                {colorFieldVisible && characteristicsFields.color &&
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
                {sizeFieldVisible && characteristicsFields.size &&
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
});

export default ChoiceField;