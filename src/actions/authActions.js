import axios from 'axios';
import apiUrl from '../config/env';

export const signOut = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
        dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: `Zostałeś wylogowany!` });
    };
}


export const signUp = (newUser) => {
    return (dispatch, getState) => {
        console.log('DZIAŁA');
        axios.post(`${apiUrl}/users/register`, {
            'user': {
                'email': newUser.email,
                'password': newUser.password,
            }
        }).then(function (res) {
                dispatch({ type: 'SIGNUP_SUCCESS', res });
                dispatch({ type: 'REGISTER_NOTIFICATION_SWITCH', payload: true, text: 'Zostałeś zarejestrowany!' });
                dispatch({ type: 'LOGIN_SUCCESS', res });
                return true
            }).catch(function (err) {
                dispatch({ type: 'SIGNUP_ERROR', err });
                return false
            });
    }
}

