import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import menu from '../../store/menu';

import useRequest from '../../hooks/useRequest';
import { getMenu, getMenuSubcategories } from '../../api/fetchData';

import './index.scss';






const Menu = observer(() => {
    const [isHovered, setIsHovered] = useState(false);
    const [categories, loading, error] = useRequest(() => getMenu(), [])
    const [subcategory, setSubcategory] = useState(null)
    const [subcategories, subLoading, subError] = useRequest(() => getMenuSubcategories(subcategory), [subcategory])
    

    // Time for menu
    let timer;

    const handleMouseEnter = (id) => {
        timer = setTimeout(() => {
            setSubcategory(id)
            menu.toggleSubcategoryShow(true)
        }, 100);
    };

    const handleMouseLeave = () => {
        clearTimeout(timer);
        menu.toggleSubcategoryShow(false)
    };


    return (
        
        <div className={`sideBar-menu ${menu.show ? '' : 'sideBar-menu--hidden '}`}>
            {categories &&
                categories.map((category) => (
                    <div 
                        className="category_row"
                        onMouseEnter={() => handleMouseEnter(category.id)}
                        onMouseLeave={handleMouseLeave}
                        key={category.id}
                    >
                        <div className="icon_wrapper">
                            <img src={category.icon} alt="books" className="row__icon" />
                        </div>
                        <p className="row__text">{category.category_name}</p>
                        <div className={category.id == subcategory && menu.subcategoryShow ? 'subcategory' : 'subcategory--hidden'}>
                            
                            {!subLoading && subcategories && subcategories.length !== 0 &&
                                
                                subcategories.map((subcat) => (
                                    <div className="subcategory_row" key={subcat.id}>
                                        <p className="subcategory__text">{subcat.subcategory_name}</p>
                                    </div>
                                ))
                            }
                            
                            {subcategories && subcategories.length == 0 && !subLoading &&
                                <div className="subcategory_row">
                                    <p className="subcategory__text">Пока такой подкатегории нет...</p>
                                </div>
                            }
                        </div>
                    </div>
                ))
            }
            

            {/* <div className="category_row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="icon_wrapper">
                    <img src={consumerElectronicsIcon} alt="books" className="row__icon" />
                </div>
                <p className="row__text">Бытовая электроника</p>

                <div className="subcategory">
                    <div className="subcategory_row">
                        <p className="subcategory__text">Книги</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Бытовая электроника</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Комплектующие для ПК, не пк и прочих штучек</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Электроника</p>
                    </div>
                </div>
                
            </div>

            <div className="category_row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="icon_wrapper">
                    <img src={laptopIcon} alt="books" className="row__icon" />
                </div>
                <p className="row__text">ПК, ноутбуки, перифирия</p>

                <div className="subcategory">
                    <div className="subcategory_row">
                        <p className="subcategory__text">Книги</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Бытовая электроника</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Комплектующие для ПК, не пк и прочих штучек</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Электроника</p>
                    </div>
                </div>
            </div>

            <div className="category_row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="icon_wrapper">
                    <img src={accessoriesIcon} alt="books" className="row__icon" />
                </div>
                <p className="row__text">Комплектующие для ПК, не пк и прочего говна</p>

                <div className="subcategory">
                    <div className="subcategory_row">
                        <p className="subcategory__text">Книги</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Бытовая электроника</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Комплектующие для ПК, не пк и прочих штучек</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Электроника</p>
                    </div>
                </div>
            </div>

            <div className="category_row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="icon_wrapper">
                    <img src={electronicsIcon} alt="books" className="row__icon" />
                </div>
                <p className="row__text">Электроника</p>

                <div className="subcategory">
                    <div className="subcategory_row">
                        <p className="subcategory__text">Книги</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Бытовая электроника</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Комплектующие для ПК, не пк и прочих штучек</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Электроника</p>
                    </div>
                </div>
            </div>

            <div className="category_row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="icon_wrapper">
                    <img src={furnitureIcon} alt="books" className="row__icon" />
                </div>
                <p className="row__text">Офис и мебель</p>

                <div className="subcategory">
                    <div className="subcategory_row">
                        <p className="subcategory__text">Книги</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Бытовая электроника</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Комплектующие для ПК, не пк и прочих штучек</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Электроника</p>
                    </div>
                </div>
            </div>

            <div className="category_row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="icon_wrapper">
                    <img src={nerworkEquipmentIcon} alt="books" className="row__icon" />
                </div>
                <p className="row__text">Сетевое оборудование</p>

                <div className="subcategory">
                    <div className="subcategory_row">
                        <p className="subcategory__text">Книги</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Бытовая электроника</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Комплектующие для ПК, не пк и прочих штучек</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Электроника</p>
                    </div>
                </div>
            </div>

            <div className="category_row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="icon_wrapper">
                    <img src={clothIcon} alt="books" className="row__icon" />
                </div>
                <p className="row__text">Одежда</p>

                <div className="subcategory">
                    <div className="subcategory_row">
                        <p className="subcategory__text">Книги</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Бытовая электроника</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Комплектующие для ПК, не пк и прочих штучек</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Электроника</p>
                    </div>
                </div>
            </div>

            <div className="category_row"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="icon_wrapper">
                    <img src={beautyIcon} alt="books" className="row__icon" />
                </div>
                <p className="row__text">Красота и здоровье</p>

                <div className="subcategory">
                    <div className="subcategory_row">
                        <p className="subcategory__text">Книги</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Бытовая электроника</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Комплектующие для ПК, не пк и прочих штучек</p>
                    </div>

                    <div className="subcategory_row">
                        <p className="subcategory__text">Электроника</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
})

export default Menu
