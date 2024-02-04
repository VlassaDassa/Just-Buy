import React from 'react';
import { observer } from 'mobx-react-lite';

import Login from './login';
import Reg from './reg';

import auth from '../../../store/authForm';
import overlay from '../../../store/overlay';

import AuthButton from './authButton';

import './index.scss';




const Auth = observer(() => {

    function toggleAuth() {
        auth.toggleShow()
        overlay.toggleShow()
    }

    return (
      <div className='auth'>
            <AuthButton 
                buttonText={'\u00D7'}
                className={'auth__close_button'}
                handler={toggleAuth}
            />
          
            {!auth.regShow ? <Login toggleAuth={toggleAuth} /> : null}
            {auth.regShow ? <Reg toggleAuth={toggleAuth} /> : null}
            
      </div>
    )
})

export default Auth;
