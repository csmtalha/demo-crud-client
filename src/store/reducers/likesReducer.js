/** @format */

const initialState = {
  user: null,
  currentPost: null,
  posts: null,
  trending: null,
  newest: null,
  error: null,
  currentPostLiked: null,
};

const likesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POST_LIKES':
      return action.likes.data;
    case 'PLIKE_POST':
      return {
        ...state,
        currentPostLiked: true,
      };
    case 'UNLIKE_POST':
      return {
        ...state,
        currentPostLiked: false,
      };
    default:
      return state;
  }
};
export default likesReducer;
