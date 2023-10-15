import React, { useState, useEffect, useRef } from "react";

import { showError } from "../../../hooks/showError";
import addProductChecking from '../../../store/addProductChecking';

import trash from '../../../assets/images/cart/trash.svg'






const Photos = () => {
    const [photoCount, setPhotoCount] = useState(0);
    const [addedPhoto, setAddedPhoto] = useState([]);
    const [resetKey, setResetKey] = useState(0)

    const photoField = useRef()

    // Calculate count photos for checking on errors
    useEffect(() => {
        addProductChecking.setCountPhotos(addedPhoto.length)
    }, [addedPhoto])


    const handleAddPhotoClick = () => {
        photoField.current.click();
    };


    const handleImageChange = (event) => {
        const file = event.target?.files[0];

        if (file?.type?.match('image.*')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target?.result;

                image.onload = () => {
                    const width = image.width;
                    const height = image.height;
                    const proportion = height/width

                    if (proportion.toFixed(1) !== String(1.3)) {
                        showError('Неверная пропорция')
                    }
                    
                    else if (photoCount < 5) {
                        const newPhotos = [...addedPhoto, e.target.result];
                        setAddedPhoto(newPhotos)
                        setPhotoCount(photoCount + 1);
                    } 
                    
                    else {
                        showError('Достигнуто максимальное количество фотографий (5)')
                    }
                };
            };
        }
        
        else {
            showError('Неверный тип файла')
        }

        // Reset input field with "key"
        setResetKey(resetKey + 1)
    };


    const handleRemovePhoto = (index) => {
        const updatedPhotos = [...addedPhoto];
        updatedPhotos.splice(index, 1);

        setAddedPhoto(updatedPhotos);
        setPhotoCount(photoCount - 1);
    };


    return (
        <div className="photos">

            <div onClick={handleAddPhotoClick} className="wrapper_photo wrapper_photo--plus">
                <div className="wrapper_photo__plus">
                </div>
            </div>

            <input id="add_photo" key={resetKey} onChange={handleImageChange} type="file" className="add_photo" ref={photoField} />
            
            {addedPhoto.map((photo, index) => (
                <div className="wrapper_photo" key={'photo' + index}>

                    <img className="wrapper_photo__photo" key={index} src={photo} />
                    <img onClick={() => handleRemovePhoto(index)} src={trash} className="wrapper_photo__icon icon" />

                </div>
            ))}
            
        </div>
    )
}


export default Photos;