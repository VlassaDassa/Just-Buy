import React from 'react';

import CloseBtn from '../../../General/closeBtn';

import './index.scss';




export const SearchBar = ({ searchValue, setSearchValue, isTyping }) => {

    return (
        <div className="choiceCity-searchBarContainer">
            <input 
                className={isTyping ? 'choiceCity-searchBarInput choiceCity-searchBarInput--typing' : 'choiceCity-searchBarInput'}
                placeholder='Введите ваш город' 

                value={searchValue}
                onChange={() => setSearchValue(event.target.value)}
            />

            <CloseBtn additionalClass='choiceCity-clearInput' handler={() => setSearchValue('')} />
        </div>
    )
}
