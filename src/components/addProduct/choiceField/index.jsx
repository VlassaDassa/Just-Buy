import React, { useState } from 'react';

import ChoiceSize from '../choiceSize';
import ChoiceColor from '../choiceColor';

import './index.scss';





const ChoiceField = ({ selectedField, handleFieldChange, colorFieldVisible, sizeFieldVisible }) => {
    const [colorFields, setColorFields] = useState([null])
    const [sizeFields, setSizeFields] = useState([null])

    const [firstClick, setFirstClick] = useState(false)

    const [value, setValue] = useState('');


    const handleAddColorField = () => {
        setColorFields([...colorFields, null])
        setFirstClick(true)
    }


    const handleAddSizeField = () => {
        setSizeFields([...sizeFields, null])
    };


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
                            value={value}
                            setValue={setValue}
                            colorFields={colorFields}
                            index={index}
                            handleAddColorField={handleAddColorField}
                            selectedField={selectedField}
                            handleFieldChange={handleFieldChange}
                            key={index}
                            onChange={(value) => {
                                const newColorFields = [...colorFields];
                                newColorFields[index] = value;
                                setColorFields(newColorFields)
                            }}

                            onDelete={() => {
                                handleDeleteColorField(index);
                            }}

                            setFirstClick={setFirstClick}
                        />

                    ))}

            </div>

            <div className="small_column small_column--size">
                {sizeFieldVisible &&
                    sizeFields.map((field, index) => (

                        <ChoiceSize
                            setFirstClick={setFirstClick}
                            value={value}
                            setValue={setValue}
                            sizeFields={sizeFields}
                            index={index}
                            handleAddSizeField={handleAddSizeField}
                            selectedField={selectedField}
                            handleFieldChange={handleFieldChange}
                            key={index}
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