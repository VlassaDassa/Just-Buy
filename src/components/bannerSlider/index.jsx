import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.scss';

import useRequest from '../../hooks/useRequest';
import { getSliderPhoto } from '../../api/fetchData';
import { showError } from '../../hooks/showError';





const BannerSlider = () => {
    const [sliderPhotos, loader, error] = useRequest(getSliderPhoto, []);
    const [currentSlider, setCurrentSlider] = useState(0);
    const [currentSize, setCurrentSize] = useState([]);
    const [isInterval, setIsInterval] = useState(null)
    
    
     if (error.code === "ERR_NETWORK") {
        showError('Слайдер не виден из-за неполадок на сервере')
     }

    // Change size
    useEffect(() => {
        if (sliderPhotos && sliderPhotos.length > 0 && !error) {
            setCurrentSize([
                {
                    src: sliderPhotos[currentSlider].big_photo,
                    class: 'preview__photo-big',
                },
                {
                    src: sliderPhotos[currentSlider].medium_photo,
                    class: 'preview__photo-medium',
                },
                {
                    src: sliderPhotos[currentSlider].small_photo,
                    class: 'preview__photo-small',
                },
            ])
        }
    }, [loader, currentSlider])


    // Changing a photos every 0.3s
    useEffect(() => {
        if (sliderPhotos && sliderPhotos.length > 0 && !error) {
            startSlider()
        }
    }, [loader]);


    const startSlider = () => {
        const interval = setInterval(() => {nextSlide()}, 3000);
            setIsInterval(interval)
            return () => clearInterval(interval);
    }


    const nextSlide = () => {
        setCurrentSlider(currentSlider => (currentSlider + 1 === 3 ? 0 : currentSlider + 1));
    }

    

    return (
        <section className="preview">
            <div className="container">
                <div className="preview__wrapper">
                    <TransitionGroup>
                        {
                            currentSize.map((size) => (
                                <CSSTransition
                                    key={size.src}
                                    timeout={500}
                                    classNames="fade"
                                >
                                    <img 
                                        key={size.src} 
                                        src={size.src} 
                                        className={size.class}
                                    />
                                </CSSTransition>
                            ))
                        }
                    </TransitionGroup>

                </div>

                <div className="preview__pagination">
                    {
                        [0, 1, 2].map((number) => (
                            <div 
                                key={number} 
                                className={ `preview__pagination-item ${currentSlider === number ? "preview__pagination-item-current" : ""}` }
                                onClick={() => {setCurrentSlider(number); clearInterval(isInterval); startSlider()}}
                            >
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default BannerSlider


