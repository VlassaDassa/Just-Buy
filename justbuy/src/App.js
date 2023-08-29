import React from 'react';
import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';


import AppRouter from './components/AppRouter';
import Index from './pages/index';
import Footer from './components/footer';
import Header from './components/header';
import Menu from './components/menu';
import Overlay from './components/overlay';
import ToUp from './components/toUp';
import Auth from './components/auth';
import MobileSearchBar from './components/mobileSearchBar';
import MenuMobile from './components/menuMobile';
import noScroll from './store/noScroll';


import './../src/assets/styles/_reset.scss'
import './../src/assets/styles/index.scss'



const App = observer(() => {
  if (noScroll.scroll) {
    document.body.classList.remove('no-scroll')
  }
  else {
      document.body.classList.add('no-scroll')
  }



  return (
    <div className="App">
      <Header />
      <Menu />
      <MobileSearchBar />
      <MenuMobile />
        <Auth />
        <Overlay />
        
        <BrowserRouter>
          <AppRouter/>
        </BrowserRouter>

        <ToUp />
      <Footer />
    </div>
  );
})

export default App;
