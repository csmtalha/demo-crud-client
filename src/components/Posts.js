/** @format */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import PostCard from './PostCard';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import usePagination from './Pagination';

const Posts = () => {
  const auth = useSelector((state) => state.auth);

  const p = useSelector((state) => state.posts);
  const posts = Array.from(p);
  let [page, setPage] = useState(1);

  const pageSize = 1;
  const count = Math.ceil(posts.length / pageSize);
  const _DATA = usePagination(posts, pageSize);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };
  if (!auth._id) {
    return <Navigate to='/signin' />;
  }
  return (
    <Container>
      <Box
        display={'flexs'}
        sx={{ m: 1 }}
      >
        <Stack
          spacing={2}
          alignItems='center'
          justifyContent='center'
        >
          <Pagination
            count={count}
            page={page}
            color='primary'
            onChange={''}
          />
        </Stack>
      </Box>
      <Grid sx={{ mt: 2 }}>
        {/* <Search /> */}

        {_DATA.currentData().map((post) => {
          return (
            <PostCard
              postId={post._id}
              key={post._id}
              post={post}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

export default Posts;
