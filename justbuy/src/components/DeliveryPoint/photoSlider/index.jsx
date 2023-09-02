import React, {useState} from "react";
import point_1 from "../../../assets/images/delivery_point/point_1.jpg";
import point_2 from "../../../assets/images/delivery_point/point_2.jpg";
import point_3 from "../../../assets/images/delivery_point/point_3.jpg";



const PhotoSlider = () => {

    const [currentSlider, setCurrentSlider] = useState(0)

    const nextSlide = () => {
        setCurrentSlider(currentSlider => (currentSlider + 1 === 3 ? 0 : currentSlider + 1));
    }

    const numbers = [1, 2, 3]

    return (
        <div className="location__photo_slider">
                    <div className="location__photo_wrapper">

                        <div>
                            {
                                numbers.map((number) => (
                                    <img
                                        src={`../../../assets/images/delivery_point/point_${number}.jpg`}
                                        key={number}
                                        className={`location__photo ${currentSlider === number ? "location__photo-selected" : ""}`}
                                        onClick={() => setCurrentSlider(number)}
                                        alt="..."
                                    />
                                ))
                            }
                        </div>

                    </div>
                    
                    <div className="location__photo_pgn">
                        {
                            [1, 2, 3].map((number) => (
                                <img
                                    src={`../../../assets/images/delivery_point/point_${number}.jpg`}
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