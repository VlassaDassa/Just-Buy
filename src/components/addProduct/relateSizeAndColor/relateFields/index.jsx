import React, { useState, useEffect } from 'react'

import { defineClassForRelate } from '../../../../services/services';

import useRequest from '../../../../hooks/useRequest';
import { getColors } from '../../../../api/addProductAPI';
import { getSizes } from '../../../../api/addProductAPI';

import addProductChecking from '../../../../store/addProductChecking';

import { onlyNumbers } from '../../../../services/services';

import chainIco from './../../../../assets/images/add_product/chain.svg';

import './index.scss';






const RelateFields = ({ index, characteristicsFields }) => {
    const [colors, setColors] = useState([])
    const [sizes, setSizes] = useState([])
    
    const [dataColors, loadingColors, errorColors] = useRequest(() => getColors(), [])
    const [dataSizes, loadingSizes, errorSizes] = useRequest(() => getSizes(), [])

    const [countValue, setCountValue] = useState('')
    const [colorValue, setColorValue] = useState('')
    const [sizeValue, setSizeValue] = useState('')


    // Set colors
    useEffect(() => {
        if (dataColors && !loadingColors) {
            setColors(dataColors)
            setColorValue(dataColors[0].color_value)
        }
    }, [dataColors, loadingColors])


    // Set sizes
    useEffect(() => {
        if (dataSizes && !loadingSizes) {
            setSizes(dataSizes)
            setSizeValue(dataSizes[0].size_value)
        }
    }, [dataSizes, loadingSizes])


    // Register count, size and color for checking on error and send to the server 
    useEffect(() => {
        addProductChecking.setInputRef('relateInput_' + index, {
            'color': colorValue,
            'size': sizeValue,
            'count': countValue,
        })
    }, [countValue, colorValue, sizeValue, characteristicsFields])



    return (
            <div className="relateInputWrapper" key={'relateField_' + index}>

                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateSize">Размер</label>

                    <select 
                        id="relateSize" 
                        className="general_characteristics__input"
                        value={sizeValue}
                        onChange={() => setSizeValue(event.target.value)}
                    >
                        {sizes &&
                            sizes.map((item) => (
                                <option key={item.size_value} value={item.size_value}>{item.size}</option>
                            ))
                        }
                    </select>
                </div>

                <img src={chainIco} className="relateIcon" />
                
                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateColor">Цвет</label>

                    <select 
                        id="relateColor" 
                        className="general_characteristics__input" 
                        onChange={() => setColorValue(event.target.value)} 
                        value={colorValue}
                    >
                        {colors &&
                            colors.map((item) => (
                                <option key={item.color_value} value={item.color_value}>{item.color}</option>
                            ))
                        }
                    </select>
                </div>
                
                <img src={chainIco} className="relateIcon" />

                <div className="relateFieldWrapper">
                    <label className="relateLabel" htmlFor="relateCount">Количество</label>
                    <input 
                        type="text" 
                        id="relateCount" 
                        className={defineClassForRelate(countValue)} 
                        value={countValue}
                        onChange={() => setCountValue(onlyNumbers(event.target.value))}
                    />
                </div>                
            </div>
    )
}

export default RelateFields
