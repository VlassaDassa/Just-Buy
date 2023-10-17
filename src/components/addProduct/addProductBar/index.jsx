import React, { useEffect, useState } from 'react';

import GeneralCharact from '../generalCharact';
import Photos from '../photos';
import PersonalCharact from '../personalCharact';

import useRequest from '../../../hooks/useRequest';
import { getCatWithSubcat, getCharacteristicsFields } from '../../../api/fetchData';
import { category_fields } from '../../../fakeVar';

import './index.scss';





const AddProductBar = () => {
    const [categories, setCategories] = useState([{
        'category_id': 'nonSelect',
        'category_name': 'Не выбрано'
    }])
    const [subcategories, setSubcategories] = useState()
    
    const [catWithSubcat, catWithSubCatLoader, catWithSubcatError] = useRequest(() => getCatWithSubcat(), [])
    
    const [selectedCategory, setSelectedCategory] = useState(categories.find((cat) => cat.category_id === 'nonSelect'));
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    
    const [fields, setCharacteristicsFields] = useState()
    



    // Inital values for fields "Category" and "Subcategory"
    useEffect(() => {
        if (catWithSubcat && catWithSubcat.length > 0) {

            const categoriesArray = catWithSubcat.map(category => ({
                'category_id': category.category_id,
                'category_name': category.category_name
            }));

            setCategories([...categoriesArray, ...categories])

            // catWithSubcat.filter(item => item.category_id)
            // const particularSubcategory = catWithSubcat.filter(item => item.category_id === 1)[0].subcategory;
        }
    }, [catWithSubcat, catWithSubCatLoader])


    // Actions on update "Category" fields
    useEffect(() => {
        if (catWithSubcat) {
            const selectSubCategory = catWithSubcat.filter(item => item.category_id === selectedCategory.category_id)
            setSelectedSubcategory(selectSubCategory[0].subcategory)
        }
    }, [selectedCategory])

    

    return (
        <main className="add_products">
            <div className="container add_products_container">
                <section className="add_prod_form">
                    <h1 className="add_prod_form__title">
                        Добавить товар
                    </h1>

                    <Photos />

                    <form action="." className="add_prod_form__form">
                        <GeneralCharact
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedSubcategory={selectedSubcategory}
                            setSelectedSubcategory={setSelectedSubcategory}

                            categories={categories}

                            subcategories={subcategories}
                            setSubcategories={setSubcategories}
                        />
                        
                        {/* <PersonalCharact
                            selectedCategory={selectedCategory}
                            selectedSubcategory={selectedSubcategory}
                        /> */}
                    </form>

                </section>
            </div>
        </main>
    )
}

export default AddProductBar;