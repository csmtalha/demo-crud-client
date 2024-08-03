/** @format */

import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from '../../api';

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/signup`, {
        ...user,
      })
      .then((res) => {
        dispatch({
          type: 'SIGN_UP',
          res,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const signIn = (user) => {
  return (dispatch) => {
    axios
      .post(`${url}/auth/signin`, {
        ...user,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch({
          type: 'SIGN_IN',
          res,
        });
        console.log(res);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: 'USER_LOADED',
        token,
      });
    } else {
      return null;
    }
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'SIGN_OUT',
    });
  };
};
