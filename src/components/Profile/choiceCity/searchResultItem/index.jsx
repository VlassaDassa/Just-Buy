import React from 'react';

import choiceCity from '../../../../store/choiceCity';
import overlay from '../../../../store/overlay';

import handIco from './../../../../assets/images/profile/choiceHandIco.svg';

import './index.scss';



export const SearchResultItem = ({ city, searchValue }) => {
    let cityName = city?.name + ', ' + city?.description

    if (cityName.length > 15 && window.innerWidth < 1024) {
        cityName = searchValue
    }

    const handleChoiceCity = () => {
        choiceCity.setCityCoord(city?.Point?.pos.split(' ').reverse().map(item => parseFloat(item)))

        if (city?.name.length > 15) {
            choiceCity.setCityName(searchValue)
        }
        else {
            choiceCity.setCityName(city?.name)
        }

        overlay.toggleShow(false)
        choiceCity.toggleShow(false)
    }

    


    return (
        <div className='choiceCity-searchResultItemWrapper' onClick={handleChoiceCity}>
            <div className="choiceCity-searchResultItem">{cityName}</div>

            <div className="choiceCity-searchResultItemBtn">
                <img src={handIco} className='choiceCity-searchResultItemIco'/>
            </div>
        </div>
    )
}
