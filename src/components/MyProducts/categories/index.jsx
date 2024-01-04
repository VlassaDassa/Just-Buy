import React, {useState, useEffect} from "react";
import './index.scss';
import CircleCheck from '../../../assets/images/my_products/circle_check.svg';

import { observer} from 'mobx-react-lite';
import myProductsStore from '../../../store/myProducts';


const Categories = observer(() => {
    const store = myProductsStore;

    const { uniqueCategories, setSelectedCategory, selectedCategory } = store;

    const isAllSelected = store.selectedCategory.length === store.uniqueCategories.length;
    
    const [AllSelected, setAllSelected] = useState(false);

    useEffect(() => {
        const selectAllCategories = async () => {
            await setSelectedCategory(uniqueCategories);
            setAllSelected(true);
        };

        selectAllCategories();
    }, [setSelectedCategory, uniqueCategories]);
    

    const handleCategorySort = (category) => {
        if (category === 'все') {
            const updatedSelect = !isAllSelected;
            if (updatedSelect) {
                store.setSelectedCategory(uniqueCategories);
            } else {
                store.setSelectedCategory([]);
            }
        } else {
            store.setSelectedCategory((prevSelected) => {
                const updatedSet = new Set(prevSelected);
                if (prevSelected.includes(category)) {
                    updatedSet.delete(category);
                } else {
                    updatedSet.add(category);
                }
                return Array.from(updatedSet);
            });
        }
    };

    return (
        <section className="categories">
            <div className='item item--select_all' onClick={() => handleCategorySort('все')}>
                <div className="item_circle">
                    <img src={CircleCheck} className={isAllSelected ? 'item_ico' : 'item_unselect'} />
                </div>
                <p className="text">Всё</p>
            </div>

            {store.uniqueCategories.map((category) => (
                <div className="item" data-prod-category="child" key={category} onClick={() => handleCategorySort(category)}>
                    <div className="item_circle">
                        <img
                            src={CircleCheck}
                            className={store.selectedCategory.includes(category) ? 'item_ico' : 'item_unselect'}
                        />
                    </div>
                    <p className="text">{category}</p>
                </div>
            ))}
        </section>
    );
});
export default Categories;
