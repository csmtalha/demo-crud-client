/** @format */

import jwtDecode from 'jwt-decode';

const initialState = {
  token: localStorage.getItem('token'),
  firstName: null,
  lastName: null,
  email: null,
  _id: null,
};
const authReaducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOADED':
      const user1 = jwtDecode(action.token);
      return {
        ...initialState,
        token: action.token,
        firstName: user1.firstName,
        lastName: user1.lastName,
        email: user1.email,
        _id: user1.user_id,
      };
    case 'SIGN_UP':
    case 'SIGN_IN':
      const user = jwtDecode(action.res.data.token);
      return {
        ...initialState,
        firstName: user.firstName,
        lastName: user.lastName,
        token: action.res.data.token,
        email: user.email,
        _id: user.user_id,
      };
    case 'SIGN_OUT':
      localStorage.removeItem('token');
      return {
        firstName: null,
        lastName: null,
        token: null,
        email: null,
        _id: null,
      };
    default:
      return state;
  }
};
export default authReaducer;
