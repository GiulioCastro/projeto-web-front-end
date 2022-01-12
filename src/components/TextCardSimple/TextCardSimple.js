import PropTypes from 'prop-types';

import {
  Grid, Box, 
  Typography, Stack,
  ButtonBase
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function TextStatus(props) {
  const { Icon, value } = props;
  return (
    <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="caption" color="text.secondary">
      <Icon fontSize="small" sx={{ mr: 0.5 }} /> {value}
    </Typography>
  )
}

TextStatus.propTypes = {
  Icon: PropTypes.object,
  value: PropTypes.string,
};

function TextCardSimple(props) {
  const { image, title, tags, description, favorites, reviews, creator, ...rest } = props;
  return (
    <ButtonBase sx={{ mb: 3, textAlign: 'left' }} {...rest}>
      <Grid container spacing={2}>
        <Grid item xs={2} lg={4}>
          <Box
            component="img"
            sx={{ width: '100%' }}
            src="https://howlongtobeat.com/games/Fallout_New_Vegas.jpg"
            alt="Paella dish"
          />
        </Grid>
        <Grid item xs={10} lg={8}>
          <Typography variant="subtitle2" color="text.primary" gutterBottom>
            The Below - Cyberpunk Adventure
          </Typography>
          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 1 }}
          >
            <TextStatus Icon={FavoriteBorderIcon} value="10" />
            <TextStatus Icon={StarBorderIcon} value="4.4" />
            <TextStatus Icon={AutoStoriesIcon} value="Ficção" />
          </Stack>
          <Typography
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 5,
            }}
            variant="body2"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac quam consectetur, feugiat mi mattis, fringilla nisl. Etiam efficitur elementum gravida. Aliquam eget posuere neque. Donec vestibulum nibh eget lacinia pretium. Nullam ut pellentesque mi. Quisque sollicitudin enim in diam sollicitudin luctus. Quisque metus sapien, gravida in metus porta, consectetur ultrices enim. Sed id aliquet nisi, vel euismod quam. Maecenas rhoncus ligula ut luctus feugiat. Suspendisse suscipit lectus id orci lobortis viverra quis sed nibh. Proin sollicitudin dolor et sem sagittis, vitae suscipit erat lobortis. Maecenas ut metus mi. Suspendisse tincidunt purus justo, sit amet egestas orci cursus sit amet.
          </Typography>
        </Grid>
      </Grid>
    </ButtonBase>
  );
}

TextCardSimple.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  description: PropTypes.string,
  favorites: PropTypes.string,
  category: PropTypes.string,
  reviews: PropTypes.string,
  creator: PropTypes.string
};

export default TextCardSimple;