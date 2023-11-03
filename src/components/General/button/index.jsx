import React from 'react';

import './index.scss';




const Button = ({ additionalClass="" }) => {
    return (
        <button className={'button' + ' ' + additionalClass}>
            Добавить размер
        </button>
    );
}

export default Button;
