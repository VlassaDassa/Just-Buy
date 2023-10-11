import React, { useState } from 'react';

import GeneralCharact from '../generalCharact';
import Photos from '../photos';
import PersonalCharact from '../personalCharact';

import { category_fields } from '../../../fakeVar';

import './index.scss';





const AddProductBar = () => {
    const [selectedCategory, setSelectedCategory] = useState(category_fields[0].name_category);
    const [selectedSubcategory, setSelectedSubcategory] = useState(category_fields[0].subcategories.length > 0 ? category_fields[0].subcategories[0].name : '');



    return (
        <main className="add_products">
            <div className="container add_products_container">
                <section className="add_prod_form">
                    <h1 className="add_prod_form__title">
                        Добавить товар
                    </h1>

                    <Photos/>

                    <form action="." className="add_prod_form__form">
                        <GeneralCharact
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedSubcategory={selectedSubcategory}
                            setSelectedSubcategory={setSelectedSubcategory}
                        />
                        
                        <PersonalCharact
                            selectedCategory={selectedCategory}
                            selectedSubcategory={selectedSubcategory}
                        />
                    </form>

                </section>
            </div>
        </main>
    )
}

export default AddProductBar;