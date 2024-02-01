import React from 'react';
import { observer } from 'mobx-react-lite';

import Login from './login';
import Reg from './reg';

import auth from '../../../store/authForm';
import overlay from '../../../store/overlay';

import AuthButton from './authButton';

import './index.scss';
import axios from 'axios';




const Auth = observer(() => {

    function toggleAuth() {
        auth.toggleShow()
        overlay.toggleShow()
    }


    // Авторизация
//    axios.get('http://192.168.0.118:8000/api/test/', {
//         headers: {
//             'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
//         }
//    })

//    .then(response => console.log(response))
//    .catch(error => console.log(error))




    // Выход
    // const logout = () => {
    //     const refreshToken = localStorage.getItem('refreshToken');

    //     console.log(refreshToken)
      
    //     axios.post('http://192.168.0.118:8000/api/logout/', {
    //         refresh_token: refreshToken
    //     })
        
    //     .then(response => {
    //         localStorage.removeItem('accessToken');
    //         localStorage.removeItem('refreshToken');
    //         localStorage.removeItem('user_id');
    //         localStorage.removeItem('username');

    //         console.log('Response: ', response)
    //     })

    //     .catch(error => console.log('Error: ', error))
    // };

    // logout()
    

    

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
