import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';

import menu from '../../../store/menu';

import useRequest from '../../../hooks/useRequest';
import { getMenu, getMenuSubcategories } from '../../../api/generalAPI';

import './index.scss';






const Menu = observer(() => {
    const [categories, loading, error] = useRequest(() => getMenu(), [])
    const [subcategory, setSubcategory] = useState(0)
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
        <div className='sideBar-menu'>
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
        </div>
    )
})

export default Menu
