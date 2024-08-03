/** @format */

import axios from 'axios';
import { url, setHeaders } from '../../api';

export const getUser = (userId) => {
  return (dispatch) => {
    axios
      .get(`${url}/users/${userId}`)
      .then((user) => {
        dispatch({
          type: 'GET_USER',
          user,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
