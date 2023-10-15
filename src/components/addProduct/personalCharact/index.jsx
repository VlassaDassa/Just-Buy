import React, { useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';

import SuccessMessage from "../../SuccessMessage";

import { category_fields } from '../../../fakeVar';
import useRegisterInputRefs from "../../../hooks/useRegisterInputRefs";
import addProductChecking from '../../../store/addProductChecking';
import { checkinOnError } from "../../../services/services";
import { defineErrorClass } from "../../../services/services";

import { showError } from "../../../hooks/showError";





const PersonalCharact = observer(({ selectedCategory, selectedSubcategory }) => {
    const [characteristicValues, setCharacteristicValues] = useState({});
    const [isVisibleSuccess, setIsVisibleSuccess] = useState(false)

    const handleCharacterChange = (e, charactId) => {
        const newValue = e.target.value;
        setCharacteristicValues({
            ...characteristicValues,
            [charactId]: newValue,
        });
    };

    const charact = category_fields
        .find(category => category.name_category === selectedCategory);

    const fields = charact.status_subcategory
        ? charact.subcategories.find(subcategory => subcategory.name === selectedSubcategory)?.fields
        : charact.fields;

    const charactArray = (fields || []).map(field => field);

    
    // Object for error checking
    const inputRefs = {}

    // Add ref to charactArray
    charactArray.map((field) => {
        inputRefs['personalChar_' + field.id] = useRef()
    })

    // Register refs
    useRegisterInputRefs(inputRefs)


    // Error checking and add product
    const handleSaveBtn = (e) => {
        e.preventDefault()
        addProductChecking.setBtnClicked(true);

        const fieldValues = {};
        for (const fieldName in addProductChecking.inputRefs) {
            fieldValues[fieldName] = addProductChecking.inputRefs[fieldName].value;
        }

        // Checking on error
        if (checkinOnError(fieldValues) === 'photos') {
            showError('Недостаточно фотографий')
        }

        else if (checkinOnError(fieldValues)) {
            setIsVisibleSuccess(true)
        }

        else {
            showError('Неверно заполнены поля')
        }
    }
    

    // Render one column
    const renderCharact = (start, end) => {
        return charactArray.slice(start, end).map((char, index) => (
            <div key={index} className="general_characteristics__item_wrapper">
                <label className="general_characteristics__label" htmlFor={char.id}>
                    {char.label_name}
                </label>

                <input
                    type="text"
                    className={defineErrorClass('personalChar_' + char.id)}
                    onChange={(e) => handleCharacterChange(e, char.id)}
                    ref={inputRefs['personalChar_' + char.id]}
                />
            </div>
        ));
    };

    return (
        <>
            <CSSTransition
                in={isVisibleSuccess}
                key={'transSuccessMessage'}
                timeout={4000}
                classNames="success"
            >
                <SuccessMessage message={'Товар успешно добавлен!'} setIsVisibleSuccess={setIsVisibleSuccess} />
            </CSSTransition>

            <div className="personal_characteristics">
                <div className="personal_characteristics__title">
                    Характеристики товара
                </div>

                <div className="column_wrapper">
                    <div className="left_column">
                        {/* TODO falsche division  */}
                        {renderCharact(0, 5)}

                    </div>
                    <div className="right_column">
                        {/* TODO falsche division  */}
                        {renderCharact(5, 10)}
                    </div>
                </div>


                <div className="button_wrapper">
                    <button className="button_wrapper__button"
                        onClick={handleSaveBtn}
                    >
                        Сохранить
                    </button>
                </div>
            </div>
        </>
    )
})

export default PersonalCharact;