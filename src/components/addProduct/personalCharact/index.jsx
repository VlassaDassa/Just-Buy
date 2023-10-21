import React, { useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';

import SuccessMessage from "../../SuccessMessage";
import Title from "../../title";

import useRegisterInputRefs from "../../../hooks/useRegisterInputRefs";
import addProductChecking from '../../../store/addProductChecking';
import { checkinOnError, defineErrorClass, product_data } from "../../../services/services";
import { addProduct } from "../../../api/fetchData";

import { showError } from "../../../hooks/showError";





const PersonalCharact = observer(({ characteristicsFields }) => {
    const [characteristicValues, setCharacteristicValues] = useState({});
    const [isVisibleSuccess, setIsVisibleSuccess] = useState(false)

    const handleCharacterChange = (e, charactId) => {
        const newValue = e.target.value;
        setCharacteristicValues({
            ...characteristicValues,
            [charactId]: newValue,
        });
    };

    
    // Object for error checking
    const inputRefs = {}

    // Add ref to charactArray
    characteristicsFields.fields.fields.map((field) => {
        inputRefs['personalChar_' + field.name] = useRef()
    })
    
    // Register refs
    useRegisterInputRefs(inputRefs)
    
    

    // Error checking and add product
    const handleSaveBtn = (e) => {
        e.preventDefault()
        addProductChecking.setBtnClicked(true);
        
        const productData = {
            'categoryId': characteristicsFields.category,
            'subcategoryId': characteristicsFields.subcategory,
            'colorVisible': characteristicsFields.color,
            'sizeVisible': characteristicsFields.size,
        }

        // Data for send to server
        const fieldValues = product_data(productData)

        // Checking on error
        if (checkinOnError(fieldValues) === 'photos') {
            showError('Недостаточно фотографий')
        }

        else if (checkinOnError(fieldValues)) {
            addProduct(fieldValues)
            setIsVisibleSuccess(true)
        }

        else {
            showError('Неверно заполнены поля')
        }
    }
    

    // Render one column
    const renderCharact = (start, end) => {
        return characteristicsFields.fields.fields.slice(start, end).map((char) => (
            <div key={char.name} className="general_characteristics__item_wrapper">
                <label className="general_characteristics__label" htmlFor={char.name}>
                    {char.display_name}
                </label>

                <input
                    type="text"
                    className={defineErrorClass('personalChar_' + char.name)}
                    onChange={(e) => handleCharacterChange(e, char.name)}
                    ref={inputRefs['personalChar_' + char.name]}
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
                <Title title={'Характеристики товара'} className={'personal_characteristics__title'} />

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