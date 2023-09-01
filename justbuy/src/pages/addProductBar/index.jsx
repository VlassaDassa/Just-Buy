import React from "react";
import AddProductBar  from "../../components/addProduct/addProductBar";
import Photos from "../../components/addProduct/photos";
import GeneralCharact from "../../components/addProduct/generalCharact";
import PersonalCharact from "../../components/addProduct/personalCharact";

const addProduct = () => {
    return (
        <main className="addProduct">
            <div className="container">
                <AddProductBar>
                    <Photos />
                    <GeneralCharact/>
                    <PersonalCharact/>
                </AddProductBar>
            </div>
        </main>
    )
}

export default addProduct;