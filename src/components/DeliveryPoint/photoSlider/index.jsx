import React, {useState, useEffect} from "react";
import useRequest from "../../../hooks/useRequest";
import { getDeliverySlider } from "../../../api/fetchData";



const PhotoSlider = () => {



    const [data, isLoading, error] = useRequest(() => getDeliverySlider());
    const [pointPhoto, setPointPhoto] = useState([]);
    const [currentSlider, setCurrentSlider] = useState(1);

    
    useEffect(() => {
        if (data) {
            setPointPhoto(prevpointPhoto => [ ...prevpointPhoto, ...data])
        }
        
    }, [data, isLoading])

    const handleMouseMove = (event) => {
        const windowWidth = window.innerWidth;
    
        if (windowWidth > 768) {
          const photo = event.currentTarget; // Используем currentTarget вместо event.target
          const rect = photo.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
    
          const offsetX = x / rect.width;
          const offsetY = y / rect.height;
    
          photo.style.transformOrigin = `${offsetX * 100}% ${offsetY * 100}%`;
        }
      };
    

    const nextSlide = () => {
        setCurrentSlider(currentSlider => (currentSlider + 1 === 3 ? 0 : currentSlider + 1));
    }
    
    
    return (
       
        <div className="location__photo_slider">
            <div className="location__photo_wrapper">
                {pointPhoto && pointPhoto.length !== 0 &&
                    [0, 1, 2].map((number) => (
                        pointPhoto[number] &&
                        <img
                            onMouseMove={handleMouseMove}
                            src={pointPhoto[number].photo}
                            key={number}
                            className={`location__photo ${currentSlider === number ? "location__photo-selected" : ""}`}
                            onClick={() => setCurrentSlider(number)}
                            alt="..."
                        />
                
                    ))}
            
                

            </div>
                    
            <div className="location__photo_pgn">
                {pointPhoto && pointPhoto.length !== 0 &&
                    [0, 1, 2].map((number) => (
                        pointPhoto[number] &&
                        <img
                            src={pointPhoto[number].photo}
                            key={number}
                            className={`location__photo_pgn_item ${currentSlider === number ? "location__photo_pgn_item-selected" : ""}`}
                            onClick={() => setCurrentSlider(number)}
                            alt="..."
                        />
                    ))
                }
            </div>

            <button className="mobile_map__button">
                Выбрать пункт выдачи
            </button>
        </div>
                
        )
    

    
}

export default PhotoSlider;