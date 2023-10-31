import React from 'react';
import './index.scss';
import MobileFooterItem from '../mobileFooterItem';

import instagramIco from './../../../assets/images/footer/instagram.svg';
import playMarketIco from './../../../assets/images/footer/playmarket.png';
import qrCodeIco from './../../../assets/images/footer/qr_code.svg';
import vkIco from './../../../assets/images/footer/vk.svg';
import youtubeIco from './../../../assets/images/footer/youtube.svg';





const Footer = () => {



    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="defualt_footer_wrapper">
                    <div className="footer_item partners">
                        <h1 className="footer__title partners__title">Партнёры</h1>
                        
                        <ul className="partners__list">
                            <li className="footer__item partners__item"><a href="#">Just GO</a></li>
                            <li className="footer__item partners__item"><a href="#">Just Write</a></li>
                            <li className="footer__item partners__item"><a href="#">Just Drive</a></li>
                        </ul>
                    </div>

                    <div className="footer_item questions">
                        <h1 className="footer__title questions__title">Задать вопрос</h1>
                        
                        <ul className="questions__list">
                            <li className="footer__item questions__item"><a href="#">Жалоба</a></li>
                            <li className="footer__item questions__item"><a href="#">Вопрос</a></li>
                        </ul>
                    </div> 

                    <div className="footer_item social_networks">
                        <h1 className="footer__title social_networks__title">Соц. сети</h1>
                        
                        <ul className="social_networks__list">
                            <li className="social_networks__item">
                                <a href="#">
                                    <img src={vkIco} className="social_networks__photo" />
                                </a>
                            </li>

                            <li className="social_networks__item">
                                <a href="#">
                                    <img src={youtubeIco} className="social_networks__photo" />
                                </a>
                            </li>

                            <li className="social_networks__item">
                                <a href="#">
                                    <img src={instagramIco} className="social_networks__photo" />
                                </a>
                            </li>
                        </ul>
                    </div> 

                    <div className="footer_item mobile_app">
                        <h1 className="footer__title mobile_app__title">
                            Мобильное приложение
                        </h1>

                        <div className="qr_code_wrapper">
                            <img src={qrCodeIco} className="qr_code_wrapper__qr_code" />
                            <a href="#"><img src={playMarketIco} className="qr_code_wrapper__google_icon" /></a>
                        </div>
                    </div> 
                </div> 

                <div className="mobile_footer_wrapper">
                    <MobileFooterItem title={'Партнёры'} listElements={['Just Go', 'Just Write', 'Just Drive']}/>
                    <MobileFooterItem title={'Задать вопрос'} listElements={['Жалоба', 'Вопрос']}/>
                    <MobileFooterItem title={'Социальные сети'} listElements={['Вконтакте', 'Инстаграм', 'YouTube']}/>
                    <MobileFooterItem title={'Мобильное приложение'} listElements={[<div className="mobile_footer_wrapper_mobile_app__link" href="#"><p className="mobile_footer_wrapper__text">Скачать в Playmarket</p><img src={playMarketIco} className="mobile_footer_wrapper__icon" /></div>]}/>
                </div> 
            </div> 
        </footer>
    )
}

export default Footer;
