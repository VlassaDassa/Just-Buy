import React from 'react';

import { SearchResultItem } from '../searchResultItem';
import Loader from '../../../General/loader';

import './index.scss';





export const SearchResults = ({ isLoading, isTyping, city, searchValue }) => {

    return (
        <div className="choiceCity-searchResultsContainer">
            <h1 className="choiceCity-searchResultsTitle">Результаты поиска</h1>

            {
                isLoading || isTyping || !city ? <Loader additionalClass='choicePointLoader' /> : <SearchResultItem city={city} searchValue={searchValue} />
            }

        </div>
    )
}

