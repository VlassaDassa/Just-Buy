import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';

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
  const [showGlobalLoader, setShowGlobalLoader] = useState(true)
  const [hiddenGlobalLoader, setHiddenGlobalLoader] = useState(false)

  if (noScroll.scroll) {
    document.body.classList.remove('no-scroll')
  }
  else {
      document.body.classList.add('no-scroll')
  }
 

  useEffect(() => {
    noScroll.toggleScroll(false)

    setTimeout(() => {
      setHiddenGlobalLoader(true)
    }, 500)

    setTimeout(() => {
      noScroll.toggleScroll(true)
      setShowGlobalLoader(false)
    }, 1000)
    
  }, [])


  // Critical error
  if (critical_error.show) {
    return <CriticalErrorMessage message="Ошибка. Скорее всего проблемы с сервером" />
  }


  return (
    <div className="App">
      {showGlobalLoader ?
          <GlobalLoader hiddenGlobalLoader={hiddenGlobalLoader}/>
        :
          null
      }

      <ErrorMessage message={'Сделать менеджер ошибок и отображать этот компонент из App.js'} />

      <Header />
      <CSSTransition
        in={menu.show}
        unmountOnExit
        key={'transmenu'}
        timeout={500}
        classNames="transmenu"
      >
        <Menu />
      </CSSTransition>
      
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
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>
        <ToUp />
      <Footer />
    </div>
  );
})

export default App;
