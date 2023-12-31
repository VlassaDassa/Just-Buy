import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

import { observer } from 'mobx-react-lite';

import CriticalErrorMessage from './components/criricalErrorMessage';
import ErrorMessage from './components/errorMessage';
import AppRouter from './components/AppRouter';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';
import Overlay from './components/overlay';
import ToUp from './components/toUp';
import Auth from './components/auth';
import MobileSearchBar from './components/mobileSearchBar';
import MenuMobile from './components/menuMobile';
import noScroll from './store/noScroll';
import GlobalLoader from './components/globalLoader';

import critical_error from './store/critical_error';

import menu from './store/menu';
import overlay from './store/overlay';

import './../src/assets/styles/_reset.scss'
import './../src/assets/styles/index.scss'



const App = observer(() => {
  const [hiddenGlobalLoader, setHiddenGlobalLoader] = useState(false)

  if (noScroll.scroll) {
    document.body.classList.remove('no-scroll')
  }
  else {
      document.body.classList.add('no-scroll')
  }

  const location = useLocation();
  

  useEffect(() => {
    window.scrollTo(0, 0);
    noScroll.toggleScroll(false)
    setHiddenGlobalLoader(false)
    

    setTimeout(() => {
      noScroll.toggleScroll(true)
      setHiddenGlobalLoader(true)
    }, 1000)
    
  }, [location])


  // Critical error
  if (critical_error.show) {
    return <CriticalErrorMessage message="Ошибка. Скорее всего проблемы с сервером" />
  }


  return (
    <div className="App">
      <GlobalLoader hiddenGlobalLoader={hiddenGlobalLoader}/>

      <ErrorMessage message={'Сделать менеджер ошибок и отображать этот компонент из App.js'} />
    
      <CSSTransition
        in={menu.show}
        unmountOnExit
        key={'transmenu'}
        timeout={500}
        classNames="transmenu"
      >
        <Menu />
      </CSSTransition>

      <Header />

      <MobileSearchBar />

      <MenuMobile />

      <Auth />
      
      <CSSTransition
        in={overlay.show}
        unmountOnExit
        key={'overlaytrans'}
        timeout={300}
        classNames="overlaytrans"
      >
        <Overlay />
      </CSSTransition>
        
      <AppRouter/>
        
      <ToUp />

      <Footer />
    </div>
  );
})

export default App;
