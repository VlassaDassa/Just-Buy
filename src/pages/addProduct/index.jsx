import React, { useEffect } from "react";
import AddProductBar from "./../../components/AddProduct/addProductBar";




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