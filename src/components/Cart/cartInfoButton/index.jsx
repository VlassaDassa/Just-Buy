import React from 'react';

import './index.scss';




const CartInfoButton = ({ text, disabled=false }) => {
    
    return (
            <button className={disabled ? 'cartInfoButton cartInfoButton--disabled' : 'cartInfoButton'} disabled={disabled}>
                {text}
            </button>
    )
}

export default CartInfoButton
