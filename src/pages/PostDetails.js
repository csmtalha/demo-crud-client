/** @format */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../store/actions/postActions';
function PostDetails() {
  const post = useSelector((state) => state.posts);

  const dispatch = useDispatch();
  const { postId } = useParams();

  useEffect(() => {
    dispatch(getPost(postId));
  }, []);

  return (
    <div className='container'>
      <div className='card-container'>
        <h4>Title: {post.title}</h4>
        <p>Post: {post.body}</p>
        <span className='like-count'>
          <span onClick={''}>
            <img src='https://img.icons8.com/material-outlined/24/000000/facebook-like--v1.png' />
          </span>
          <span>{post.likeCount}</span>
        </span>
        <div>
          <span>
            <b>Created At:</b> {post.createdAt}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
