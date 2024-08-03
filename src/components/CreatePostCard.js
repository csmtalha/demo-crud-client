/** @format */

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import { createPost } from '../store/actions/postActions';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from '@mui/material';

const CreatePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: '',
    body: '',
    selectedFile: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(post));

    setPost({
      title: '',
      body: '',
      selectedFile: '',
    });
    // navigate('/posts');
  };

  return (
    <Card sx={{ textAlign: 'center' }}>
      <CardHeader title={'Create Post'} />
      <hr />

      <CardContent>
        <Box
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Title'
            variant='outlined'
            style={{ width: '90%' }}
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
          <TextField
            id='outlined-multiline-static'
            label='Whats on your mind...'
            multiline
            rows={4}
            defaultValue='Default Value'
            style={{ width: '90%' }}
            value={post.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
          <FileBase64
            type='image'
            multiple={false}
            onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
          />
          <Button
            size='small'
            variant='contained'
            onClick={handleSubmit}
          >
            Post
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CreatePost;
