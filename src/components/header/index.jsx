import React from 'react';
import { Link } from 'react-router-dom';

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

import { authVar } from '../../fakeVar';

import './index.scss';




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
                                onClick={authVar ? null : toggleAuth}
                            >
                                {
                                    authVar ?
                                        <Link to="/profile"><img src={profile} /></Link>      
                                    :
                                        <img src={profile} />
                                }
                                
                            </li>

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
