import axios from "axios";
import apiUrl from "../config/env";

export const signOut = () => {
  return (dispatch, getState) => {
    dispatch({ type: "SIGNOUT_SUCCESS" });
    dispatch({
      type: "REGISTER_NOTIFICATION_SWITCH",
      payload: true,
      text: `Zostałeś wylogowany!`,
    });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState) => {
    axios
      .post(`${apiUrl}/users/register`, {
        email: newUser.email,
        password: newUser.password,
        phone: newUser.phone,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
      })
      .then(function (res) {
        dispatch({ type: "SIGNUP_SUCCESS", res });
        return true;
      })
      .catch(function (err) {
        return false;
      });
  };
};

export const login = (user) => {
  return (dispatch, getState) => {
    axios
      .post(`${apiUrl}/users/login`, {
        email: user.email,
        password: user.password,
      })
      .then(function (res) {
        dispatch({ type: "LOGIN_SUCCESS", res });
        return true;
      })
      .catch(function (err) {
        dispatch({ type: "LOGIN_ERROR", err });
        return false;
      });
  };
};
