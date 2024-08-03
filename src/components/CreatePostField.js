/** @format */

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import CreatePostCard from './CreatePostCard';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Card, Grid, TextField } from '@mui/material';

import '../assets/css/style.css';

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

const CreatePost = () => {
  const auth = useSelector((state) => state.auth);
  const [openCreate, setOpenCreate] = useState(false);

  const handleOpenCreate = () => setOpenCreate(true);
  const handleCloseCreate = () => setOpenCreate(false);

  return (
    <Card
      sx={{
        maxWidth: 650,
        display: 'flex',
        mt: 2,
        p: 1,
        mr: 'auto',
        ml: 'auto',
      }}
    >
      <Grid
        container
        alignItems='center'
        justifyContent='center'
        spacing={1}
      >
        <Grid item>
          <Avatar aria-label='recipe'>
            <PersonIcon />
          </Avatar>
        </Grid>
        <Grid
          item
          sx={{ ml: 1 }}
          style={{ width: '80%' }}
        >
          <TextField
            onClick={() => handleOpenCreate()}
            variant='filled'
            defaultValue={"What's on your mind, " + auth.firstName}
            InputProps={{
              readOnly: true,
            }}
            style={{ width: '100%' }}
          />
        </Grid>
        <Modal
          open={openCreate}
          onClose={handleCloseCreate}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <CreatePostCard />
          </Box>
        </Modal>
      </Grid>
    </Card>
  );
};

export default CreatePost;
