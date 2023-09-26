import React from 'react'
import './index.scss';

import menu from '../../store/menu';
import auth from '../../store/auth';
import overlay from '../../store/overlay';
import mobileSearchbar from '../../store/mobileSearchbar';
import mobileMenu from '../../store/mobileMenu';
import noScroll from '../../store/noScroll';

import logo from './../../assets/images/header/logo.svg';
import loup from './../../assets/images/header/loup.svg';
import burger from './../../assets/images/header/burger.svg';
import profile from './../../assets/images/header/profile.svg';
import cart from './../../assets/images/header/cart.svg';






const Header = () => {
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


    return (
        <header className="header">
            <div className="container">
                <div className="header_wrapper">
                    <a href="index.html"><img className="header__logo" src={logo} /></a>

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
                                <a href="#"><img src={burger} /></a>
                            </li>

                            <li 
                                className="header__icons-item header__icons-profile"
                                onClick={toggleAuth}
                            >
                                <img src={profile} />
                            </li>

                            <li className="header__icons-item header__icons-cart"><a href="cart.html"><img src={cart} /></a></li>

                            <li 
                                className="header__icons-item header__icons-desktop-burger"
                                onClick={toggleMenu}
                            >
                                <a href="#"><img src={burger} /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}

export default Header
