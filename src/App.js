/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import PostDetails from './pages/PostDetails';
import { getPosts } from './store/actions/postActions';

import SignIn from './pages/SignIn';

import SignUp from './pages/SignUp';

import { Layout } from './pages/Layout';
import { loadUser } from './store/actions/authActions';

import Posts from './components/Posts';

function Routing() {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          {/* <Route
            path='posts/:postId'
            element={<PostDetails />}
          /> */}
          <Route
            path='signup'
            element={<SignUp />}
          />
          <Route
            path='/posts'
            element={<Posts />}
          ></Route>
          <Route
            path='signin'
            element={<SignIn />}
          />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getPosts());
  }, []);
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
}

export default App;
