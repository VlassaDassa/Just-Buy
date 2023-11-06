import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import GeneralCharact from '../generalCharact';
import Photos from '../photos';
import PersonalCharact from '../personalCharact';
import Title from './../../General/title';
import RelateSizeAndColor from '../relateSizeAndColor';

import useRequest from '../../../hooks/useRequest';
import { getCatWithSubcat, getCharacteristicsFields } from '../../../api/addProductAPI';
import { showError } from '../../../hooks/showError';
import addProductChecking from '../../../store/addProductChecking';
import relateSizeAndColor from '../../../store/relateSizeAndColor';

import './index.scss';





const AddProductBar = observer(() => {
    const [categories, setCategories] = useState([{
        'category_id': 'nonSelect',
        'category_name': 'Не выбрано'
    }])
    const [subcategories, setSubcategories] = useState(null)
    
    const [catWithSubcat, catWithSubCatLoader, catWithSubcatError] = useRequest(() => getCatWithSubcat(), [])
    
    const [selectedCategory, setSelectedCategory] = useState(categories.find((cat) => cat.category_id === 'nonSelect'));
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    
    const [characteristicsFields, setCharacteristicsFields] = useState(null)


    // Inital values for fields "Category" and "Subcategory"
    useEffect(() => {
        if (catWithSubcat && catWithSubcat.length > 0) {

            const categoriesArray = catWithSubcat.map(category => ({
                'category_id': category.category_id,
                'category_name': category.category_name
            }));

            setCategories([...categoriesArray, ...categories])
        }
    }, [catWithSubcat, catWithSubCatLoader])


    // Actions on update "Category" fields
    useEffect(() => {
        addProductChecking.resetInputRefs();
        if (catWithSubcat && selectedCategory.category_id != "nonSelect") {
            const subcat = catWithSubcat.filter(item => item.category_id === selectedCategory.category_id)
            setSubcategories(subcat[0].subcategory)

            setSelectedSubcategory(subcat[0].subcategory[0].subcategory_id)
        }
    }, [selectedCategory])


    // Actions on update current "SubCategory" fields
    useEffect(() => {
        addProductChecking.resetInputRefs();
        if (subcategories && selectedSubcategory) {

            // Get characteristics relate with selectedSubcategory
            getCharacteristicsFields(selectedSubcategory)
            .then(response => {
                if (response.status === 200) {
                    setCharacteristicsFields(response.data[0])
                }

                else {
                    showError('Неполадки на сервере')
                }
            })
            .catch(error => {
                showError('Неполадки на сервере')
            })
        }
    }, [selectedSubcategory])


    return (
        <main className="add_products">
            <div className="container add_products_container">
                <section className="add_prod_form">
                    <Title title={'Добавить товар'} />

                    <Photos />

                    <RelateSizeAndColor show={relateSizeAndColor.show} characteristicsFields={characteristicsFields} />

                    <form action="." className="add_prod_form__form">
                        <GeneralCharact
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedSubcategory={selectedSubcategory}
                            setSelectedSubcategory={setSelectedSubcategory}

                            categories={categories}

                            subcategories={subcategories}
                            setSubcategories={setSubcategories}

                            characteristicsFields={characteristicsFields}
                        />
                        
                        {
                            characteristicsFields && selectedCategory.category_id !== "nonSelect" ?
                                <PersonalCharact
                                    characteristicsFields={characteristicsFields}
                                    selectedCategory={selectedCategory}
                                    selectedSubcategory={selectedSubcategory}
                                />
                            :
                            <>
                                <Title title={'Характеристики товара'} className={'personal_characteristics__title'} />
                                <p>Выберите подкатегорию</p>
                            </>
                        }
                        
                    </form>

                </section>
            </div>
        </main>
    )
})

export default AddProductBar;