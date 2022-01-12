import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {
  Divider,
  Card, CardContent,
  CardMedia, CardActionArea,
  Box, Typography,
  Stack, Chip
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LanguageIcon from '@mui/icons-material/Language';

function TextStatus(props) {
  const { title, Icon, value } = props;
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="caption" color="text.secondary">
        <Icon fontSize="small" sx={{ mr: 0.5 }} /> {title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {value}
      </Typography>
    </Box>
  )
}

TextStatus.propTypes = {
  Icon: PropTypes.object,
  title: PropTypes.string,
  value: PropTypes.string,
};

function TextCard(props) {
  const { image, title, tags, description, favorites, reviews, creator, ...rest } = props;
  const navigate = useNavigate();
  return (
    <Card sx={{ mb: 3 }} {...rest}>
      <CardActionArea sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start', p: 1 }} onClick={() => navigate('/read')}>
        <CardMedia
          component="img"
          sx={{ width: '144px' }}
          image="https://howlongtobeat.com/games/Fallout_New_Vegas.jpg"
          alt="Text banner"
        />
        <CardContent>
          <Typography variant="h3" color="text.primary" gutterBottom>
            Lorem ipsum dolor
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Chip label="Tag 1" size="small" color="primary" />
            <Chip label="Tag 2" size="small" color="primary" />
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            sx={{ mb: 1 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <TextStatus Icon={FavoriteBorderIcon} title="Favoritos" value="10" />
            <TextStatus Icon={StarBorderIcon} title="Nota média" value="4.4" />
            <TextStatus Icon={AutoStoriesIcon} title="Categoria" value="Ficção" />
            <TextStatus Icon={LanguageIcon} title="Língua" value="pt/br" />
          </Stack>
          <Typography
            sx={{
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 4,
            }}
            variant="body2"
            color="text.secondary"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac quam consectetur, feugiat mi mattis, fringilla nisl. Etiam efficitur elementum gravida. Aliquam eget posuere neque. Donec vestibulum nibh eget lacinia pretium. Nullam ut pellentesque mi. Quisque sollicitudin enim in diam sollicitudin luctus. Quisque metus sapien, gravida in metus porta, consectetur ultrices enim. Sed id aliquet nisi, vel euismod quam. Maecenas rhoncus ligula ut luctus feugiat. Suspendisse suscipit lectus id orci lobortis viverra quis sed nibh. Proin sollicitudin dolor et sem sagittis, vitae suscipit erat lobortis. Maecenas ut metus mi. Suspendisse tincidunt purus justo, sit amet egestas orci cursus sit amet.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

TextCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  description: PropTypes.string,
  favorites: PropTypes.string,
  category: PropTypes.string,
  reviews: PropTypes.string,
};

export default TextCard;