<<<<<<< HEAD
import React, { useState } from "react";
import "./index.scss";
import trash from '../../../assets/images/cart/trash.svg'


const Photos = () => {

    const [photoCount, setPhotoCount] = useState(0);
    const [addedPhoto, setAddedPhoto] = useState([]);

    const handleAddPhotoClick = () => {
        const addPhotoInput = document.getElementById('add_photo');
        addPhotoInput.click();
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

                    if (width < 516 || height < 688) {
                        alert('Минимальный размер 516x688');
                    } else if (photoCount < 5) {
                        const newPhotos = [...addedPhoto, e.target.result];
                        setAddedPhoto(newPhotos)
                        setPhotoCount(photoCount + 1);
                    } else {
                        alert('Достигнуто максимальное количество фотографий (5)');
                    }
                };
            };
        } else {
            // Неверный тип файла
            alert('Неверный тип файла');
        }
    };

    const handleRemovePhoto = (index) => {
        // Удаляем фотографию из массива по индексу
        const updatedPhotos = [...addedPhoto];
        updatedPhotos.splice(index, 1);
        setAddedPhoto(updatedPhotos);
        setPhotoCount(photoCount - 1);
      };


=======
import React from "react";
import "./index.scss";


const Photos = () => {
>>>>>>> main
    return (
        <div className="photos">

            <div className="wrapper_photo wrapper_photo--plus">
<<<<<<< HEAD
                <div onClick={handleAddPhotoClick} className="wrapper_photo__plus">

                </div>
            </div>

            <input id="add_photo" onChange={handleImageChange} type="file" className="add_photo" />
            
            {addedPhoto.map((photo, index) => (
                <div className="wrapper_photo">

                    <img className="wrapper_photo__photo" key={index} src={photo} alt='...' />
                    <img onClick={() => handleRemovePhoto(index)} src={trash} className="wrapper_photo__icon icon" alt="..."/>

                </div>
            ))}
            
=======
                <div className="wrapper_photo__plus">
                    
                </div>
            </div>

            <input type="file" className="add_photo" />
>>>>>>> main
        </div>
    )
}


export default Photos;