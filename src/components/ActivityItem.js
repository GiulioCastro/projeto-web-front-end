import {
  Button, Divider,
  Card, CardContent,
  Box, Typography
} from '@mui/material';

function ActivityItem(props) {
  const { Icon, title, subtitle, text, buttonText, onButtonClick } = props;
  return (
    <Box>
      <Box display="flex" alignItems="center">
        <Icon color="primary" fontSize="large" /> <Typography color="primary" variant="h2">Read</Typography>
      </Box>
      <Typography color="secondary" variant="h5" gutterBottom>
        The joy of reading
      </Typography>
      <Typography color="secondary" variant="body2" paragraph>
        Find amazing stories written by super talented writers from around the world. Explore the many different genres ranging from fanfiction, love stories, poems, diaries, crime stories, fantasy and much more.
      </Typography>
      <Button variant="contained">
        Comece a ler
      </Button>
    </Box>
  );
}

export default ActivityItem;
