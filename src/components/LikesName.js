/** @format */

import { Dialog } from '@mui/material';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';

export const LikesName = ({ postId }) => {
  const likes = useSelector((state) => state.likes);

  if (postId === likes._id)
    return (
      <List sx={{ pt: 0 }}>
        {likes.likes.map((like) => (
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText>
              {like.firstName} {like.lastName}{' '}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    );
};
