import React from "react";
import "./index.scss";
<<<<<<< HEAD
import SelectCategory from "../selectCategory";


const GeneralCharact = ({ selectedCategory, setSelectedCategory, selectedSubcategory, setSelectedSubcategory }) => {


=======



const GeneralCharact = () => {
>>>>>>> main
    return (
        <div className="general_characteristics">
            <div className="general_characteristics__couple_wrapper">
                <div className="general_characteristics__item_wrapper">
<<<<<<< HEAD
                    <label className="general_characteristics__label" htmlFor="name">Название</label>
                    <input type="text" id="name" className="general_characteristics__input" />
                </div>
                
                <div className="general_characteristics__item_wrapper--hidden">
                    <label className="general_characteristics__label" htmlFor="name">Название</label>
                    <input type="text" id="hidden" className="general_characteristics__input" />
                </div>
            </div>
            
            

            <div className="general_characteristics__couple_wrapper">
                <div className="general_characteristics__item_wrapper">
                    <label className="general_characteristics__label" htmlFor="price">Цена за 1 шт.</label>
=======
                    <label className="general_characteristics__label" for="name">Название</label>
                    <input type="text" id="name" className="general_characteristics__input" />
                </div>

                <div className="general_characteristics__item_wrapper general_characteristics__item_wrapper--hidden">
                    <label className="general_characteristics__label" for="name">Название</label>
                    <input type="text" id="hidden" className="general_characteristics__input" />
                </div>
            </div>

            {/* ./general_characteristics__couple_wrapper */}

            <div className="general_characteristics__couple_wrapper">
                <div className="general_characteristics__item_wrapper">
                    <label className="general_characteristics__label" for="price">Цена за 1 шт.</label>
>>>>>>> main

                    <div className="input_ico_wrapper">
                        <input type="text" id="price" className="general_characteristics__input" />
                        <span className="price_ico">₽</span>
                    </div>
                </div>

            </div>

<<<<<<< HEAD
            <SelectCategory
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedSubcategory={selectedSubcategory}
                setSelectedSubcategory={setSelectedSubcategory}
            />


            <label className="general_characteristics__label" htmlFor="description">Описание</label>
            <textarea name="description" id="description" className="general_characteristics__input" cols="30" rows="10"></textarea>

        </div>

    )

=======
            {/* <!-- ./general_characteristics__couple_wrapper --> */}

            <div className="general_characteristics__couple_wrapper">
                <div className="general_characteristics__item_wrapper">
                    <label className="general_characteristics__label" for="category">Категория</label>

                    <select id="category" className="general_characteristics__input">
                        <option value="books" selected>Книги</option>
                        <option value="cloths">Одежда</option>
                        <option value="electronics">Электроника</option>
                        <option value="shoes">Туфли</option>
                    </select>
                </div>

                <div className="general_characteristics__item_wrapper">
                    <label className="general_characteristics__label" for="subcategory">Подкатегория</label>

                    <select id="subcategory" className="general_characteristics__input">
                        <option value="fiction" selected>Беллетристика</option>
                        <option value="comics">Комиксы и манга</option>
                        <option value="philosophy">Философия</option>
                    </select>
                </div>
            </div>

            {/* <!-- ./general_characteristics__couple_wrapper --> */}

            {/* <!-- Color --> */}
            <div className="small_column small_column--color">
                <div className="small_column__row">
                    <div className="general_characteristics__item_wrapper">
                        <label className="general_characteristics__label" for="color">Цвет</label>

                        <select id="color" className="general_characteristics__input">
                            <option value="white">Жёлтый</option>
                            <option value="red" selected>Красный</option>
                            <option value="black">Чёрный</option>
                        </select>
                    </div>

                    <div className="general_characteristics__item_wrapper">
                        <label className="general_characteristics__label" for="count">Количество</label>

                        <input type="text" id="count" className="general_characteristics__input" />
                    </div>

                    <div className="icon add_product__color circle">
                        <div className="add_product__color plus"></div>
                    </div>

                </div>

                {/* <!-- ./small_column__row --> */}


            </div>
            {/* <!-- ./small_column__row --> */}

            {/* <!-- Size --> */}
            <div className="small_column small_column--size">
                <div className="small_column__row">
                    <div className="general_characteristics__item_wrapper">
                        <label className="general_characteristics__label" for="size">Размер</label>

                        <select id="size" className="general_characteristics__input">
                            <option value="1">41-43</option>
                            <option value="2" selected>39-41</option>
                            <option value="3">44-46</option>
                        </select>
                    </div>

                    <div className="general_characteristics__item_wrapper">
                        <label className="general_characteristics__label" for="count">Количество</label>

                        <input type="text" id="count" className="general_characteristics__input" />
                    </div>

                    <div className="icon add_product__color circle">
                        <div className="add_product__color plus"></div>
                    </div>
                </div>
                {/* <!-- ./small_column__row --> */}

            </div>
            {/* <!-- ./small_column --> */}

            {/* <!-- Description --> */}
            <label className="general_characteristics__label" for="description">Описание</label>
            <textarea name="description" id="description" className="general_characteristics__input" cols="30" rows="10"></textarea>
        </div> 

    )
>>>>>>> main
}

export default GeneralCharact;