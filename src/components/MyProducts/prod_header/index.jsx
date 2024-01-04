import React, {useState} from "react";
import './index.scss';
import DropdownArrow from '../../../assets/images/my_products/dropdown_arrow.svg';
import DropdownArrowActive from '../../../assets/images/my_products/dropdown_arrow-active.svg'
import Sorting from '../../../assets/images/my_products/sorting.svg';

import { observer } from 'mobx-react-lite';
import myProductsStore from '../../../store/myProducts';
import { Link } from "react-router-dom";


const ProdHeader = observer(() => {

    const {setSortType} = myProductsStore

    const [selectSort, setSelectSort] = useState(false)

    const handleClickSort = () => {
        setSelectSort(!selectSort)
    }

    const handleSelectSort = (type) => {
        
        switch (type) {
            case 'successful':
                setSortType('successful')
                break
            case 'best_selling':
                setSortType('best_selling')
                break
            case 'all': 
                setSortType('all')
                break
            default: 
                console.error('handle: Invalid sortType', type)
        }
    }

    return (
        <section className="prod_header">
            <div className="prod_header__title">

                <h1>Товары продавца</h1>
                <Link to="../add_product">
                    <div className="icon circle">
                        <div className="plus"></div>
                    </div>  
                </Link>
            </div>

            <div className={selectSort ? 'dropdown dropdown--selected' : 'dropdown'} onClick={() => handleClickSort()}>
                <button className={selectSort ? 'dropdown-btn dropdown-btn--selected' : "dropdown-btn"}>
                    <p className="dropdown-btn__text">Сортировка</p>
                    <img className="dropdown-btn__img" src={selectSort ? DropdownArrowActive : DropdownArrow}/>
                </button>
                <img src={Sorting} className="dropdown-btn__ico"/>
                <ul className={selectSort ? 'dropdown-menu show' : 'dropdown-menu'}>
                    <li className="dropdown_item" onClick={() => handleSelectSort('successful')} data-sort-type="successful">Успешные</li>
                    <li className="dropdown_item" onClick={() => handleSelectSort('best_selling')} data-sort-type="best_selling">Продаваемые</li>
                    <li className="dropdown_item" onClick={() => handleSelectSort('all')} data-sort-type="all">Все</li>
                </ul>
            </div> 
            
        </section>
    )
})

export default ProdHeader;