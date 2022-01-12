import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar,
  Card, CardContent,
  Typography,
  List, ListItem, ListSubheader,
  ListItemAvatar, ListItemText
} from '@mui/material';

function WriterListItem(props) {
  /* const { name, image } = props; */
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Sandra Adams" src="https://mui.com/static/images/avatar/3.jpg" />
      </ListItemAvatar>
      <ListItemText
        primary="Oui Oui"
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Sandra Adams
            </Typography>
            {' — Do you have Paris recommendations? Have you ever…'}
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
      <CardContent>
        <List 
          sx={{ width: '100%' }}
          subheader={<ListSubheader>Escritores recomendados</ListSubheader>}
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