import React, { useState } from "react";






const PhotoSlider = ({ photosArray }) => {
    const mainPhotoId = photosArray.find(item => String(item.id).includes('main')).id
    const [currentPhoto, setCurrentPhoto] = useState(mainPhotoId)

    // Scale and move image
    const handleMouseMove = (event) => {
        const windowWidth = window.innerWidth;
    
        if (windowWidth > 768) {
          const photo = event.currentTarget;
          const rect = photo.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
    
          const offsetX = x / rect.width;
          const offsetY = y / rect.height;
    
          photo.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
        }
    };



    return (
       
        <div className="location__photo_slider">
            <div className="location__photo_wrapper">

                <img
                    onMouseMove={handleMouseMove}
                    src={photosArray.find(item => item.id === currentPhoto).photo}
                    className='location__photo location__photo-selected'
                />

            </div>


            <div className="location__photo_pgn">

                {

                    photosArray.map((item) => (
                        <img
                            key={item.id}
                            src={item.photo}
                            onClick={() => setCurrentPhoto(item.id)}
                            className={`location__photo_pgn_item ${currentPhoto === item.id ? "location__photo_pgn_item-selected" : ""}`}
                        />
                    ))

                }
                
            </div>
        </div>
        )
}

export default PhotoSlider;