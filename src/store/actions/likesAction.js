/** @format */
import axios from 'axios';

import { url, setHeaders } from '../../api';

export const getPostLikes = (id) => {
  return (dispatch) => {
    axios
      .get(`${url}/posts/${id}/likes`, setHeaders())

      .then((likes) => {
        dispatch({
          type: 'GET_POST_LIKES',
          likes,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const plikePost = async (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/posts/${id}/plike`, null, setHeaders())
      .then((post) => {
        dispatch({
          type: 'PLIKE_POST',
          post,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
export const unlikePost = async (id) => {
  return (dispatch) => {
    axios
      .patch(`${url}/posts/${id}/unlike`, null, setHeaders())
      .then((post) => {
        dispatch({
          type: 'UNLIKE_POST',
          post,
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
