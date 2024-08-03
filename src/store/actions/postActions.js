/** @format */

import axios from 'axios';
import { url, setHeaders } from '../../api';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Alert from '@mui/material/Alert';

export const getPosts = () => {
  return (dispatch) => {
    axios
      .get(`${url}/posts`, setHeaders())
      .then((posts) => {
        dispatch({
          type: 'GET_POSTS',
          posts,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    axios
      .post(`${url}/posts`, { ...post }, setHeaders())
      .then((post) =>
        dispatch({
          type: 'CREATE_POST',
          post,
        })
      )
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const getPost = (id) => {
  return (dispatch) => {
    axios
      .get(`${url}/posts/${id}`, setHeaders())
      .then((post) => {
        dispatch({
          type: 'GET_POST',
          post,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const updatePost = (updatedPost, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/posts/${id}`, updatedPost, setHeaders())
      .then((post) => {
        dispatch({
          type: 'UPDATE_POST',
          post,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    axios
      .delete(`${url}/posts/${id}`, setHeaders())
      .then(() =>
        dispatch({
          type: 'DELETE_POST',
          id: id,
        })
      )

      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const likePost = (likeCount, id) => {
  return (dispatch) => {
    axios
      .put(`${url}/posts/${id}/like`, likeCount, setHeaders())
      .then((post) => {
        dispatch({
          type: 'LIKE_POST',
          post,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};

export const searchPost = (searchkey) => {
  return (dispatch) => {
    axios
      .get(`${url}/posts/search/${searchkey}`, setHeaders())
      .then((posts) => {
        dispatch({
          type: 'SEARCH_POST',
          posts,
        });
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
};
