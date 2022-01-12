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
            src="https://img.wattpad.com/cover/161683646-144-k994126.jpg"
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
            A group of strangers chosen by the goverment to help with the secret project  end up in an futuristic/cyberpunk city in a conflict between an insurgency force and a wealthy corporation.

            This is my first short story so feedback would be nice. Leave a vote if you enjoyed the story. The pictures are not mine.
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