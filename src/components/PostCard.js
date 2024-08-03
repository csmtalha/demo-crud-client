/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deletePost, likePost } from '../store/actions/postActions';
import { useState } from 'react';
import { LikesName } from './LikesName';
import { getPostLikes } from '../store/actions/likesAction';
import UpdatePostCard from './UpdatePostCard';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { CardActionArea, CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Dialog,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '1%',
};

const PostCard = ({ post, postId }) => {
  const dispatch = useDispatch();

  const [likeCount, setlikeCount] = useState(post.likeCount);
  const [openLikes, setOpenLikes] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);

  const [liked, setLiked] = useState(false);

  const [likeActive, setLikeActive] = useState();
  const handleLike = (id) => {
    dispatch(likePost(likeCount, id));
  };

  const handlelikeNames = (id) => {
    dispatch(getPostLikes(id));
    setlikeCount(post.likeCount);
    if (post.likeCount > 0) setOpenLikes(true);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id));
  };
  //   const handleOpen = () => setOpen(true);
  const handleCloseLikes = () => setOpenLikes(false);
  const handleOpenUpdate = () => setOpenUpdate(true);
  const handleCloseUpdate = () => setOpenUpdate(false);
  const postedTime = post.createdAt.replace(/T/, ' ').replace(/\..+/, '');

  return (
    <Card sx={{ maxWidth: 650, mb: 3, mr: 'auto', ml: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {post.postedBy.firstName[0]}
          </Avatar>
        }
        title={`${post.postedBy.firstName}` + ' ' + `${post.postedBy.lastName}`}
        subheader={postedTime}
        action={
          // <IconButton aria-label='settings'>
          //   <MoreVertIcon />
          // </IconButton>
          <>
            <IconButton size='small'>
              <ModeEditIcon onClick={() => handleOpenUpdate()} />
            </IconButton>
            <IconButton>
              <DeleteIcon onClick={() => handleDelete(postId)} />
            </IconButton>
          </>
        }
      ></CardHeader>
      S
      <Typography
        variant='body1'
        color='text.secondary'
        sx={{ ml: 1, mr: 1 }}
      >
        {post.title}
      </Typography>
      <CardActionArea sx={{ mb: 0 }}>
        <CardMedia
          component='img'
          image={post.selectedFile}
          alt='Paella dish'
        />
        <CardContent>
          <Typography
            variant='body1'
            color='text.secondary'
          >
            {post.body}
          </Typography>
        </CardContent>{' '}
      </CardActionArea>
      <hr style={{ margin: 0 }} />
      <CardActions>
        <IconButton aria-label='add to favorites'>
          <ThumbUpIcon
            color='primary'
            onClick={() => handleLike(postId)}
          />
        </IconButton>
        <Button
          size='small'
          onClick={() => handlelikeNames(postId)}
        >
          {post.likeCount}
        </Button>
      </CardActions>
      <Modal
        open={openLikes}
        onClose={handleCloseLikes}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <LikesName postId={postId} />
        </Box>
      </Modal>
      <Modal
        open={openUpdate}
        onClose={handleCloseUpdate}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <UpdatePostCard postId={postId} />
        </Box>
      </Modal>
    </Card>
  );
};
export default PostCard;
