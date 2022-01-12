import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar,
  Card, CardContent, CardHeader,
  Typography,
  List, ListItem, ListSubheader,
  ListItemAvatar, ListItemText
} from '@mui/material';

function WriterListItem(props) {
  /* const { name, image } = props; */
  return (
    <ListItem alignItems="flex-start" button>
      <ListItemAvatar>
        <Avatar alt="Sandra Adams" src="https://mui.com/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Sandra Adams"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              color="text.primary"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque velit.
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

WriterListItem.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
};

function WriterRecommendationList(props) {
  const { ...rest } = props;
  return (
    <Card {...rest}>
      <CardHeader title="Escritores recomendados" sx={{ pb: 0 }} />
      <CardContent>
        <List 
          sx={{ width: '100%' }}
        >
          <WriterListItem />
          <WriterListItem />
          <WriterListItem />
          <WriterListItem />
        </List>
      </CardContent>
    </Card>
  );
}

WriterRecommendationList.propTypes = {
  
};

export default WriterRecommendationList;