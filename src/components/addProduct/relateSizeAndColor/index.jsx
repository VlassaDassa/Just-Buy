import React, { useState } from 'react';

import Title from '../../General/title';
import Button from '../../General/button';
import CloseBtn from '../../General/closeBtn';
import RelateFields from './relateFields';

import relateSizeAndColor from '../../../store/relateSizeAndColor';
import overlay from '../../../store/overlay';
import addProductChecking from '../../../store/addProductChecking';

import './index.scss';




const RelateSizeAndColor = ({ show, characteristicsFields }) => {
    const [countFields, setCountFields] = useState(1)


    const closeRelateSizeColor = () => {
        relateSizeAndColor.toggleShow(false)
        overlay.toggleShow(false)
    }


    const addField = () => {
        setCountFields(countFields + 1)
    }


    const deleteField = () => {
        if (countFields - 1 > 0) {
            addProductChecking.deleteRelate(countFields - 1)
            setCountFields(countFields - 1)
        }
    }



    return (
        <div className={show ? 'relateSizeColor' : 'relateSizeColor relateSizeColorHidden'}>
            <CloseBtn additionalClass={'relateCloseBtn'} handler={closeRelateSizeColor} />

            <Title title={"Цвет и размер"} additionalClass={'relateTitle'} />
            

            {
                Array.from({ length: countFields }, (_, index) => (
                    <RelateFields key={'relateFields_' + index} index={index} characteristicsFields={characteristicsFields} />
                ))
            }
            
          
            <div className="relateBtnsWrapper">
                <Button additionalClass='relateButton' text="Добавить" handler={addField} />
                <Button additionalClass='relateButton deleteRelateButton' text="Удалить" handler={deleteField} />
            </div>
        </div>
    );
}

export default RelateSizeAndColor;
