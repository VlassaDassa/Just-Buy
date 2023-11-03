import React from 'react';
import { observer } from 'mobx-react-lite';

import Login from './../login';
import Reg from './../reg';

import auth from '../../../store/auth';
import overlay from '../../../store/overlay';

import './index.scss';




const Auth = observer(() => {

    function toggleAuth() {
        auth.toggleShow()
        overlay.toggleShow()
    }


    return (
      <div className={`auth ${!auth.show && 'auth--hidden'}`}>
          <div 
              className="auth__close_button"
              onClick={toggleAuth}
          >
              &times;
          </div>
          <Login />
          <Reg />
      </div>
    )
})

export default Auth;
