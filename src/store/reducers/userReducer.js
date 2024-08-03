/** @format */

const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_USER':
      return action.user.data;
    default:
      return state;
  }
};
export default userReducer;
