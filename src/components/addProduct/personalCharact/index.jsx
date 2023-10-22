import React, { useState, useRef, useEffect, createRef } from "react";
import { CSSTransition } from 'react-transition-group';
import { observer } from 'mobx-react-lite';


import SuccessMessage from "../../SuccessMessage";
import Title from "../../title";

import addProductChecking from '../../../store/addProductChecking';
import { checkinOnError, defineErrorClass, product_data } from "../../../services/services";
import { addProduct } from "../../../api/fetchData";

import { showError } from "../../../hooks/showError";





const PersonalCharact = observer(({ characteristicsFields, selectedSubcategory, selectedCategory }) => {
    const [isVisibleSuccess, setIsVisibleSuccess] = useState(false)
    const [charRefs, setCharRefs] = useState({});
    const [counter, setCounter] = useState(0)


    const updateCharRefs = (fields) => {
        const newCharRefs = {};
        fields.forEach((char) => {
            newCharRefs['personalChar_' + char.name] = createRef();
        });
        setCharRefs(newCharRefs);
    };


    // Register refs
    useEffect(() => {
        Object.keys(charRefs).forEach(fieldName => {
            const inputRef = charRefs[fieldName];
            addProductChecking.setInputRef(fieldName, inputRef.current);
        });
    }, [charRefs]);


    useEffect(() => {
        updateCharRefs(characteristicsFields.fields.fields);
    }, [characteristicsFields, selectedSubcategory, selectedCategory]);





    // Error checking and add product
    const handleSaveBtn = (e) => {
        e.preventDefault()
        addProductChecking.setBtnClicked(true);
        setCounter(counter+1)
        
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
                    ref={charRefs['personalChar_' + char.name]}
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
                        {renderCharact(0, Math.ceil(characteristicsFields.fields.fields.length/2))}

                    </div>
                    <div className="right_column">
                        {renderCharact(Math.ceil(characteristicsFields.fields.fields.length/2), characteristicsFields.fields.fields.length)}
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
