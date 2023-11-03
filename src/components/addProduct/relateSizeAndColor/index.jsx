import React, { useEffect, useState } from 'react';

import Title from '../../General/title';
import Button from '../../General/button';
import CloseBtn from '../../General/closeBtn';

import relateSizeAndColor from '../../../store/relateSizeAndColor';
import overlay from '../../../store/overlay';

import useRequest from '../../../hooks/useRequest';
import { getColors } from '../../../api/addProductAPI';
import { getSizes } from '../../../api/addProductAPI';

import chainIco from './../../../assets/images/add_product/chain.svg';

import './index.scss';




const RelateSizeAndColor = () => {
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])
    
    const [dataColors, loadingColors, errorColors] = useRequest(() => getColors(), [])
    const [dataSizes, loadingSizes, errorSizes] = useRequest(() => getSizes(), [])


    // Set colors
    useEffect(() => {
        if (dataColors && loadingColors) {
            setColors(dataColors)
        }
    }, [dataColors, loadingColors])


    // Set sizes
    useEffect(() => {
        if (dataSizes && loadingSizes) {
            setSizes(dataSizes)
        }
    }, [dataSizes, loadingSizes])

    

    const closeRelateSizeColor = () => {
        relateSizeAndColor.toggleShow(false)
        overlay.toggleShow(false)
    }


    return (
        <div className="relateSizeColor">
            <CloseBtn additionalClass={'relateCloseBtn'} handler={closeRelateSizeColor} />

            <Title title={"Цвет и размер"} />

            <div className="relateInputWrapper">

                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateSize">Размер</label>
                    <input type="text" id="relateSize" className="general_characteristics__input" />
                </div>

                <img src={chainIco} className="relateIcon" />
                
                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateColor">Цвет</label>
                    <input type="text" id="relateColor" className="general_characteristics__input" />
                </div>
                
                <img src={chainIco} className="relateIcon" />

                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateCount">Количество</label>
                    <input type="text" id="relateCount" className="general_characteristics__input" />
                </div>                
            </div>

            <div className="relateInputWrapper">

                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateSize">Размер</label>
                    <input type="text" id="relateSize" className="general_characteristics__input" />
                </div>

                <img src={chainIco} className="relateIcon" />
                
                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateColor">Цвет</label>
                    <input type="text" id="relateColor" className="general_characteristics__input" />
                </div>
                
                <img src={chainIco} className="relateIcon" />

                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateCount">Количество</label>
                    <input type="text" id="relateCount" className="general_characteristics__input" />
                </div>                
            </div>

            <Button additionalClass='relateButton' />
        </div>
    );
}

export default RelateSizeAndColor;
