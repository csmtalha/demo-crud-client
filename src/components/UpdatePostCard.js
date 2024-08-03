/** @format */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updatePost } from '../store/actions/postActions';
import FileBase64 from 'react-file-base64';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

const UpdatePost = ({ postId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postData, setPostData] = useState({
    title: '',
    body: '',
    selectedFile: '',
  });
  const post = useSelector((state) =>
    postId ? state.posts.find((p) => p._id === postId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, []);

  const handleSubmit = () => {
    dispatch(updatePost(postData, postId));
    navigate('/posts');
  };
  return (
    <Grid container>
      <Card sx={{ textAlign: 'center', p: 1 }}>
        <CardHeader title={'Update Post'} />
        <hr />

        <CardContent style={{ paddingLeft: 'inherit' }}>
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
              style={{ width: '100%' }}
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <TextField
              id='outlined-multiline-static'
              label='Whats on your mind...'
              multiline
              rows={4}
              defaultValue='Default Value'
              style={{ width: '100%' }}
              value={postData.body}
              onChange={(e) =>
                setPostData({ ...postData, body: e.target.value })
              }
            />
          </Box>
        </CardContent>
        <CardMedia
          sx={{ p: 1 }}
          component='img'
          height='194'
          image={post.selectedFile}
          alt='Paella dish'
        />
        <FileBase64
          type='image'
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectedFile: base64 })
          }
        />
      </Card>
      <Grid
        item
        sx={{ p: 1, ml: 'auto', mr: 'auto' }}
      >
        <Button
          size='small'
          variant='contained'
          onClick={handleSubmit}
        >
          Update
        </Button>
      </Grid>
    </Grid>
  );
};

export default UpdatePost;
