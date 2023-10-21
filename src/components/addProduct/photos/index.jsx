import React, { useState, useEffect, useRef } from "react";

import { showError } from "../../../hooks/showError";
import addProductChecking from '../../../store/addProductChecking';

import trash from '../../../assets/images/cart/trash.svg'






const Photos = () => {
    const [photoCount, setPhotoCount] = useState(0);
    const [addedPhoto, setAddedPhoto] = useState([]);
    const [resetKey, setResetKey] = useState(0)
    const [counter, setCouner] = useState(0)

    const [mainPhoto, setMainPhoto] = useState()
    const [firstClick, setFirtClick] = useState(false)

    const photoField = useRef()

    // Calculate count photos for checking on errors
    useEffect(() => {
        const addPhotoLength = addedPhoto.length
        addProductChecking.setCountPhotos(addPhotoLength)

        // Auto set main photo
        if (addPhotoLength > 0 && !firstClick) {
            setMainPhoto(addedPhoto[0].key)
        }

    }, [addedPhoto])


    const handleAddPhotoClick = () => {
        photoField.current.click();
    };
    
    const handleMainPhoto = (photoId) => {
        setFirtClick(true)
        setMainPhoto(photoId)
    }

    const handleImageChange = (event, key) => {
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
                        setCouner(counter+1)

                        const newPhotos = [
                            ...addedPhoto,
                            { key: counter, file: e.target.result}
                          ];
                        setAddedPhoto(newPhotos);
                        setPhotoCount(photoCount + 1);

                        addProductChecking.addPhoto(file, counter)

                        if (addedPhoto.length === 0 && counter != mainPhoto) {
                            setMainPhoto(counter)
                        }
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
    

    const handleRemovePhoto = (keyToRemove) => {
        if (addedPhoto.length > 0) {
            if (mainPhoto === keyToRemove) {
                setMainPhoto(addedPhoto[0].key)
            }

            if (keyToRemove === addedPhoto[0].key && addedPhoto.length > 1) {
                setMainPhoto(addedPhoto[1].key)
            }
        }

       



        const updatedPhotos = addedPhoto.filter(photo => photo.key !== keyToRemove);
      
        setAddedPhoto(updatedPhotos);
        setPhotoCount(photoCount - 1);
        addProductChecking.deletePhoto(setCouner(counter+1))
    };


    return (
        <div className="photos">

            <div onClick={handleAddPhotoClick} className="wrapper_photo wrapper_photo--plus">
                <div className="wrapper_photo__plus">
                </div>
            </div>

            <input id="add_photo" key={resetKey} onChange={handleImageChange} type="file" className="add_photo" ref={photoField} />
            
            {addedPhoto.map((photo) => (
                <div className="wrapper_photo" key={`photo${photo.key}`}>
                    <img className="wrapper_photo__photo" src={photo.file} />
                    <img onClick={() => handleRemovePhoto(photo.key)} src={trash} className="wrapper_photo__icon icon" />
                    <p className="makeMainPhoto" onClick={() => handleMainPhoto(photo.key)}>
                        {photo.key === mainPhoto ? 'Основное фото' : 'Сделать основным фото'}
                    </p>
                </div>
            ))}
            
        </div>
    )
}


export default Photos;