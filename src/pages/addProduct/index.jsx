import React, { useEffect } from "react";
import AddProductBar from "./../../components/addProduct/addProductBar";




const AddProduct = () => {

    useEffect(() => {
        document.title = 'Добавить товар'
    }, [])

    return (
        <>
            <AddProductBar/>  
        </>
    )
}

export default AddProduct;