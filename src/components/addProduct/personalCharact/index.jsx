import React, { useState } from "react";
import "./index.scss";
import { category_fields } from '../../../fakeVar';



const PersonalCharact = ({ selectedCategory, selectedSubcategory }) => {

    const [characteristicValues, setCharacteristicValues] = useState({});

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



    const renderCharact = (start, end) => {
        return charactArray.slice(start, end).map((char, index) => (
            <div key={index} className="general_characteristics__item_wrapper">
                <label className="general_characteristics__label" htmlFor={char.id}>
                    {char.label_name}
                </label>
                <input
                    type="text"
                    className="general_characteristics__input"
                    onChange={(e) => handleCharacterChange(e, char.id)}
                />
            </div>
        ));
    };

    return (
        <>
            <div className="personal_characteristics">
                <div className="personal_characteristics__title">
                    Характеристики товара
                </div>

                <div className="column_wrapper">
                    <div className="left_column">
                        {renderCharact(0, 5)}

                    </div>
                    <div className="right_column">
                        {renderCharact(5, 10)}
                    </div>
                </div>


                <div className="button_wrapper">
                    <button className="button_wrapper__button">
                        Сохранить
                    </button>
                </div>
            </div>
        </>
    )
}

export default PersonalCharact;