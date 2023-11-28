import React from 'react';

import './index.scss';




const CartInfoButton = ({ text }) => {
    return (
            <button className="cartInfoButton">
                {text}
            </button>
    )
}

export default CartInfoButton
