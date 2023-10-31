import React, { useState, useRef } from 'react'





const MobileFooterItem = ({title, listElements}) => {
    const [isExpanded, setIsExpanded] = useState(true)
    const contentRef = useRef()

    const showHideList = () => {
        setIsExpanded(!isExpanded);
        const elementToResize = contentRef.current;
        const newHeight = isExpanded ? elementToResize.scrollHeight : 0;
        elementToResize.style.height = newHeight + 'px';
    }



    return (
        <div className="mobile_footer_wrapper__item">
            <div 
                className={`mobile_footer_wrapper__title ${isExpanded && 'active'}`}
                onClick={showHideList}
            >
                {title}
            </div>

            
            <ul ref={contentRef} className="mobile_footer_wrapper__list">
                {
                    listElements.map((element, index) => (
                        <li key={title + index} className="mobile_footer_wrapper__link"><a href="#">{element}</a></li>
                    ))
                }
            </ul>
        </div> 
    )
}

export default MobileFooterItem
