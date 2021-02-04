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
        axios.post(`${apiUrl}/users/register`, {
            'email': newUser.email,
            'password': newUser.password,
            'phone': newUser.phone,
            'firstName': newUser.firstName,
            'lastName': newUser.lastName,
        }).then(function (res) {
                dispatch({ type: 'SIGNUP_SUCCESS', res });
                return true
            }).catch(function (err) {
                console.log(err);
                return false
            });
    }
}

