import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import CloseBtn from '../../General/closeBtn';
import { SearchBar } from './searchBar';
import { SearchResults } from './searchResults';

import overlay from '../../../store/overlay';
import choiceCity from '../../../store/choiceCity';
import { getCoordinatesCity } from '../../../api/profileAPI';
import { showError } from '../../../hooks/showError';

import baner from './../../../assets/images/profile/choiceCityBaner.jpg'

import './index.scss';





export const ChoiceCity = () => {
    const [searchValue, setSearchValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [city, setCity] = useState(null)

    
    // Определение печатает ли пользователь
    useEffect(() => {
        const timeId = setTimeout(() => {
            setIsTyping(false)
        }, 1000)

        setIsTyping(true)

        return () => {
            clearTimeout(timeId)  
        }
    }, [searchValue])


    // Отправка запроса, если печать прекратилась на 1 секунду
    useEffect(() => {
        if (!searchValue) return;

        setIsLoading(true)

        getCoordinatesCity(searchValue)
        .then(response => {
            if (response.status != 200) return;

            setCity(response.data.response.GeoObjectCollection.featureMember[0]?.GeoObject)
        })

        .catch(error => {
            console.error('Ошибка при запросе Yanded Map API: ', error)
            showError('Ошибка сервера')
        })

        .finally(() => setIsLoading(false))
        
    }, [isTyping])

    
    const closeChoiceCity = () => {
        choiceCity.toggleShow(false)
        overlay.toggleShow(false)
    }

    return (
        <div className="choiceCityContainer">

            <CloseBtn handler={closeChoiceCity} />

            <SearchBar 
                searchValue={searchValue}
                setSearchValue={setSearchValue}

                isTyping={isTyping}
            />

            <CSSTransition
                in={Boolean(searchValue)}
                key={'searchResultsTransition'}
                timeout={400}
                classNames="searchResultsTransition"
                unmountOnExit
            >
                <SearchResults isLoading={isLoading} isTyping={isTyping} city={city} searchValue={searchValue} />
            </CSSTransition>
            

            <div className="choiceCity-imgContainer">
                <img src={baner} className="choiceCity-img" />
            </div>
        </div>
    )
}
