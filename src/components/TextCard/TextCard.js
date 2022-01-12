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
          sx={{ width: 'auto' }}
          image="https://img.wattpad.com/cover/161683646-144-k994126.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h3" color="text.primary" gutterBottom>
            The Below - Cyberpunk Adventure
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
              WebkitLineClamp: 5,
            }}
            variant="body2"
            color="text.secondary"
          >
            A group of strangers chosen by the goverment to help with the secret project  end up in an futuristic/cyberpunk city in a conflict between an insurgency force and a wealthy corporation.

            This is my first short story so feedback would be nice. Leave a vote if you enjoyed the story. The pictures are not mine.
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