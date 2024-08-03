/** @format */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../store/actions/authActions';

const MAppbar = () => {
  const auth = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/signin');
  };
  return (
    <AppBar position='static'>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <Typography variant='body2'>
          Welcome {auth.firstName} {auth.lastName}
        </Typography>

        <Button
          style={{ color: 'white' }}
          id='signout-btn'
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default MAppbar;
