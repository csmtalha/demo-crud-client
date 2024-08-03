/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Posts from '../components/Posts';
import CreatePostField from '../components/CreatePostField';
import { Container, Grid } from '@mui/material';
function Home() {
  const auth = useSelector((state) => state.auth);
  if (!auth._id) {
    return <Navigate to='/signin' />;
  }

  return (
    <Container>
      <Grid
        container
        sx={{ p: 1 }}
      >
        <Grid
          item
          md={2}
          lg={2}
          display={{ sm: 'none', xs: 'none', lg: 'block', md: 'block' }}
        >
          Side Bar
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={8}
          md={8}
        >
          <CreatePostField />
          <Posts />
        </Grid>

        <Grid
          item
          md={2}
          lg={2}
          display={{ sm: 'none', xs: 'none', lg: 'block', md: 'block' }}
        >
          Side Bar
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
