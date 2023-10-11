import React, { useState } from "react";

import trash from '../../../assets/images/cart/trash.svg'
import "./index.scss";





const Photos = () => {
    const [photoCount, setPhotoCount] = useState(0);
    const [addedPhoto, setAddedPhoto] = useState([]);


    const handleAddPhotoClick = () => {
        const addPhotoInput = document.getElementById('add_photo');
        addPhotoInput.click();
    };


    const handleImageChange = (event) => {
        const file = event.target?.files[0];

        // TODO вынести проверку отсюда
        if (file?.type?.match('image.*')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);

            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target?.result;

                image.onload = () => {
                    const width = image.width;
                    const height = image.height;
                    
                    if (width < 516 || height < 688) {
                        // TODO Выводить ERROR Message
                        alert('Минимальный размер 516x688');
                    } 
                    
                    else if (photoCount < 5) {
                        const newPhotos = [...addedPhoto, e.target.result];
                        setAddedPhoto(newPhotos)
                        setPhotoCount(photoCount + 1);
                    } 
                    
                    else {
                        // TODO Выводить ERROR Message
                        alert('Достигнуто максимальное количество фотографий (5)');
                    }
                };
            };
        }
        
        else {
            // TODO Выводить ERROR Message
            alert('Неверный тип файла');
        }
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

            <input id="add_photo" onChange={handleImageChange} type="file" className="add_photo" />
            
            {addedPhoto.map((photo, index) => (
                <div className="wrapper_photo">

                    <img className="wrapper_photo__photo" key={index} src={photo} />
                    <img onClick={() => handleRemovePhoto(index)} src={trash} className="wrapper_photo__icon icon" />

                </div>
            ))}
            
        </div>
    )
}


export default Photos;