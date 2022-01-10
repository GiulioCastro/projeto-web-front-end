import {
  Button, Divider,
  Card, CardContent,
  Box, Typography
} from '@mui/material';

function TextCardSimple(props) {
  const { Icon, title, subtitle, text, buttonText, onButtonClick } = props;
  return (
    <Card>
    <CardMedia
      component="img"
      height="194"
      image="https://d3aeoi5a6g6m4p.cloudfront.net/image/movella/201301301919461023/cover/190/297/true/true/F9F9FA/301bf8f2be0f0bb0fe97623d6882df4f"
      alt="Paella dish"
    />
      <Box display="flex" alignItems="center">
        <Icon color="primary" fontSize="large" /> <Typography color="primary" variant="h2">Read</Typography>
      </Box>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>      
    </Card>
  );
}

export default ActivityItem;
