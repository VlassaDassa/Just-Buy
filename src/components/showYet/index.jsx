import React from 'react';
import './index.scss';



const ShowYet = ({btnText, setCurrentPage, countProduct, currentPage, setStartLimit}) => {
  return (
    <div className="products_button">
        <button 
            className="products_button__btn"
            
            onClick={() => {setStartLimit(currentPage); setCurrentPage(currentPage+countProduct)}}
        >
            {btnText}
        </button>
    </div> 
  )
}

export default ShowYet
