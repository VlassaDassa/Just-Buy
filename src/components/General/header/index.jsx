import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { ProfileMenu } from './profileMenu';

import menu from '../../../store/menu';
import auth from '../../../store/authForm';
import overlay from '../../../store/overlay';
import mobileSearchbar from '../../../store/mobileSearchbar';
import mobileMenu from '../../../store/mobileMenu';
import noScroll from '../../../store/noScroll';

import logo from './../../../assets/images/header/logo.svg';
import loup from './../../../assets/images/header/loup.svg';
import burger from './../../../assets/images/header/burger.svg';
import profile from './../../../assets/images/header/profile.svg';
import cart from './../../../assets/images/header/cart.svg';

import './index.scss';




const Header = () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false)
    const ref = useRef();
    const refIco = useRef();

    function toggleMenu() {
        menu.toggleShow()
        overlay.toggleShow()
        noScroll.toggleScroll()
    }

    function toggleAuth() {
        auth.toggleShow()
        overlay.toggleShow()
    }

    function toggleMobileSearchbar() {
        mobileSearchbar.toggleShow()
        noScroll.toggleScroll()
    }

    function toggleMobileMenu() {
        mobileMenu.toggleShow()
        noScroll.toggleScroll()
    }


    // Закрытие ProfileMenu при клике вне его
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target) && !refIco.current.contains(event.target)) {
            setShowProfileMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        }

    }, []);


    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <Link to='/'><img className="header__logo" src={logo} /></Link>

                    <input type="text" placeholder="Поиск товаров" name={"random-" + Math.random()} className="header__searchbar-input" autoComplete="off" />
                        
                    <nav className="header__icons">
                        <ul>
                            <li
                                className="header__icons-item header__icons-loup"
                                onClick={toggleMobileSearchbar}
                            >
                                <img src={loup} />
                            </li>

                            <li 
                                className="header__icons-item header__icons-burger" 
                                onClick={toggleMobileMenu}
                            >
                                <img src={burger} />
                            </li>

                            <li 
                                className="header__icons-item header__icons-profile"
                                ref={refIco}
                            >
                                {
                                    localStorage.getItem('user_id') ?
                                        <img src={profile} onClick={() => setShowProfileMenu(!showProfileMenu)} />
                                    :
                                        <img src={profile} onClick={toggleAuth} />
                                }
                            </li>
                            
                            <CSSTransition
                                in={showProfileMenu}
                                key={'profileMenuTransition'}
                                timeout={400}
                                classNames="profileMenuTransition"
                                unmountOnExit
                            >
                                <ProfileMenu ref={ref} setShowProfileMenu={setShowProfileMenu} />
                            </CSSTransition>

                            <li className="header__icons-item header__icons-cart"><Link to="/cart"><img src={cart} /></Link></li>

                            <li 
                                className="header__icons-item header__icons-desktop-burger"
                                onClick={toggleMenu}
                            >
                                <img src={burger} />
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header
