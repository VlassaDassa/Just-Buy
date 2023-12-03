import React from 'react';

import './index.scss';




const CartInfoButton = ({ text, disabled=false, handler=null }) => {
    
    return (
            <button className={disabled ? 'cartInfoButton cartInfoButton--disabled' : 'cartInfoButton'} disabled={disabled} onClick={handler}>
                {text}
            </button>
    )
}

export default CartInfoButton
