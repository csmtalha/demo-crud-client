/** @format */

import { Drawer } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
// import Link from '@mui/material/Link';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { signOut } from '../store/actions/authActions';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import { Menu } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import MAppbar from '../components/MAppbar';

export const Nav = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/signin');
  };

  if (auth._id) {
    return (
      <>
        <MAppbar />
      </>
    );
  }
};
