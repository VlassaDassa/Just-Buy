import React from 'react';
import './index.scss';
import GeneralCharact from '../generalCharact';
import PersonalCharact from '../personalCharact';
import Photos from '../photos';


const AddProductBar = () => {
    return (
        <main className="add_products">
            <div className="container add_products_container">
                <section className="add_prod_form">
                    <h1 className="add_prod_form__title">
                        Добавить товар
                    </h1>
                    
                    <form action="." className="add_prod_form__form">
                        <Photos/>
                        <GeneralCharact/>
                        <PersonalCharact/>

                    </form>
                </section>
            </div>
        </main>
    )
}

export default AddProductBar;