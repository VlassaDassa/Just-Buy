import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import { getMenu, getMenuSubcategories } from '../../api/fetchData';
import useRequest from '../../hooks/useRequest';

import './index.scss';

import arrow_left from './../../assets/images/mobile_menu/arrow_left.svg';
import profile from './../../assets/images/header/profile.svg';
import cart from './../../assets/images/header/cart.svg';

import mobileMenu from '../../store/mobileMenu';
import noScroll from '../../store/noScroll';


const MenuMobile = observer(() => {
    const [selectedCategory, setSelectedCategory] = useState({category_id: 1, category_name: 'Книги'});
    const [categories, loading, error] = useRequest(getMenu, [])
    const [subCategories, loadingSub, errorSub] = useRequest(() => getMenuSubcategories(selectedCategory.category_id), [selectedCategory.category_id])
    const [hideMobileCategory, setHideMobileCategory] = useState(false)


    const select_category = (category) => {
        setHideMobileCategory(true)
        setSelectedCategory(category)
    };

    function close() {
        mobileMenu.toggleShow()
        noScroll.toggleScroll()
    }

    

    return (
        <div className={`mobile_menu ${mobileMenu.show ? "mobile_menu-hidden" : ""}`}>
            <div className="container">
                <div className="mobile_searchbar__wrapper">
                    <form action="." className="mobile_searchbar__form"></form>
                        <input type="text" className="mobile_searchbar__input"/>
                    <button 
                        className="mobile__btn"
                        onClick={close}
                    >
                        Отмена
                    </button>
                </div>
                <nav className="mobile_menu__icons">
                    <ul>
                        {/* <li className="mobile_menu-item mobile_menu-profile"><a href="profile.html"><img src={profile} /></a></li> */}
                        <li 
                            className="mobile_menu-item mobile_menu-profile"
                        >
                            <img src={profile} />
                        </li>
                        <li className="mobile_menu-item mobile_menu-cart"><a href="cart.html"><img src={cart} /></a></li>
                    </ul>
                </nav>

                <ul className="mobile_menu__list">
                    {!hideMobileCategory ? 
                        (categories && categories.map((category) => (
                            <li 
                                key={category.id}
                                data-menu-id={category.id} className="mobile_menu__item"
                                onClick={() => select_category({
                                    category_id: category.id,
                                    category_name: category.category_name
                                })}
                            >

                                <span>{category.category_name}</span>
                            </li>
                        ))
                    )
                    : 
                    (
                    <>
                        <div className="mobile_menu__title">
                            <img className="mobile_menu__img"
                                src={arrow_left} 
                                onClick={() => setHideMobileCategory(false)}
                            />
                            <h1>{selectedCategory.category_name}</h1>
                        </div>
                        
                        {subCategories.length != 0
                        ?
                        
                            subCategories.map((subcategory) => (
                                <li 
                                    key={subcategory.id}
                                    data-subcategory-id={subcategory.id}
                                    className="mobile_menu__item"
                                >
                                    <span>{subcategory.subcategory_name}</span>
                                </li>
                            ))
                        :
                            <div className="subcategory_none">Подкатегорий пока нет...</div>
                        }
                    </>
                    )}
                   
                </ul>
            </div>
        </div>
    )
})

export default MenuMobile
