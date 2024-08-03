/** @format */

const postReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
    case 'SEARCH_POST':
      return action.posts.data;
    case 'GET_POST':
      return action.post.data;
    case 'CREATE_POST':
      return [action.post.data, ...state];
    case 'UPDATE_POST':
      return state.map((post) => {
        if (post._id === action.post.data._id) {
          return action.post.data;
        } else {
          return post;
        }
      });
    case 'LIKE_POST':
      return state.map((post) => {
        if (post._id === action.post.data._id) {
          return action.post.data;
        } else {
          return post;
        }
      });

    case 'DELETE_POST':
      return state.filter((post) => {
        return post._id !== action.id;
      });

    default:
      return state;
  }
};
export default postReducer;
