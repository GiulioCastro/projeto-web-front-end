import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  Box, Grid,
  Avatar,
  IconButton,
  Divider, Chip,
  Typography,
  Rating, Checkbox,
  Tooltip
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from 'components/Page';
import TextCardSimple from 'components/TextCardSimple';
import LabelValue from 'components/LabelValue';

import { makeStyles } from '@mui/styles';
import { pink } from '@mui/material/colors';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
  },
  positionSticky: {
    position: 'sticky',
    top: '64px'
  }
}));

function TextStatus(props) {
  const { Icon, value } = props;
  return (
    <Typography sx={{ display: 'flex', alignItems: 'center' }} variant="caption" color="text.secondary">
      <Icon fontSize="small" sx={{ mr: 0.5 }} /> {value}
    </Typography>
  )
}

TextStatus.propTypes = {
  Icon: PropTypes.node,
  value: PropTypes.string,
};

function Read() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [favorite, setFavorite] = useState(false);

  return (
    <Page className={classes.root} title="Read">
      <Box height={375} mb={5} display="flex" justifyContent="center" alignItems="center" bgcolor="secondary.main">
        <img
          height="100%"
          src="https://wallpapercave.com/wp/IEKMIjq.jpg"
          alt="Text Banner"
        />
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <Typography variant="h5" color="textSecondary" paragraph textAlign="center">
              Criador
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
              <Avatar
                alt="Sandra Adams"
                src="https://mui.com/static/images/avatar/3.jpg"
                sx={{ width: 64, height: 64, mb: 1 }}
              />
              <Typography variant="h6" color="textSecondary">
                by Sandra Adams
              </Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" color="textSecondary" paragraph textAlign="center">
              Informações
            </Typography>
            <LabelValue label="Favoritos" value="10" variant="body2" textAlign="center" />
            <LabelValue label="Nota média" value="4.4" variant="body2" textAlign="center" />
            <LabelValue label="Categoria" value="Ficção" variant="body2" textAlign="center" />
            <LabelValue label="Língua" value="pt/br" variant="body2" textAlign="center" />
            <LabelValue label="Palavras" value="358" variant="body2" textAlign="center" />
            <LabelValue label="Publicado em" value="2021-12-12" variant="body2" textAlign="center" />
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" color="textSecondary" paragraph textAlign="center">
              Tags
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Chip label="Tag 1" size="small" color="primary" />
              </Grid>
              <Grid item>
                <Chip label="Tag 2" size="small" color="primary" />
              </Grid>
            </Grid>
            <Divider sx={{ my: 3 }} />
            <Typography variant="h5" color="textSecondary" paragraph textAlign="center">
              Sua nota
            </Typography>
            <Box display="flex" justifyContent="center">
              <Rating
                name="text-rating"
                value={rating}
                onChange={(e, value) => setRating(value)}
              />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Grid container justifyContent="space-between" sx={{ mb: 1 }}>
              <Grid item xs="auto">
                <Tooltip title="Voltar">
                  <IconButton onClick={() => navigate('/home')}>
                    <ArrowBackIcon color="textSecondary" />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs="auto">
                <Tooltip title="Favoritar">
                  <Checkbox
                    inputProps={{ 'aria-label': 'Favorite text' }}
                    icon={<FavoriteBorderIcon />}
                    checkedIcon={<FavoriteIcon sx={{ color: pink[500] }} />}
                    onChange={() => setFavorite(!favorite)}
                    checked={favorite}
                  />
                </Tooltip>
              </Grid>
            </Grid>
            <Typography color="textPrimary" variant="h2" align="center">
              The Below - Cyberpunk Adventure
            </Typography>
            <Divider variant="middle" sx={{ my: 4 }} />
            <Typography color="textPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac quam consectetur, feugiat mi mattis, fringilla nisl. Etiam efficitur elementum gravida. Aliquam eget posuere neque. Donec vestibulum nibh eget lacinia pretium. Nullam ut pellentesque mi. Quisque sollicitudin enim in diam sollicitudin luctus. Quisque metus sapien, gravida in metus porta, consectetur ultrices enim. Sed id aliquet nisi, vel euismod quam. Maecenas rhoncus ligula ut luctus feugiat. Suspendisse suscipit lectus id orci lobortis viverra quis sed nibh. Proin sollicitudin dolor et sem sagittis, vitae suscipit erat lobortis. Maecenas ut metus mi. Suspendisse tincidunt purus justo, sit amet egestas orci cursus sit amet.

              Duis id purus condimentum, mollis mauris non, maximus velit. In eu ipsum justo. Donec scelerisque ex id justo viverra tincidunt. Aenean at ipsum arcu. Suspendisse magna massa, semper ac velit nec, laoreet consectetur ante. Integer ac metus nec nisi sagittis tincidunt. Praesent blandit sapien eu augue congue convallis vitae quis diam. Maecenas pharetra mollis ligula a maximus.

              Aliquam erat volutpat. Cras dolor mi, porta vitae enim quis, ultricies bibendum purus. Curabitur sed faucibus justo, a efficitur purus. Aliquam nec rutrum risus. Aliquam vitae mollis lectus, a euismod risus. Proin augue eros, hendrerit porttitor elementum ut, ullamcorper id sapien. Aenean rhoncus sem non mauris ornare, et aliquam felis volutpat. Nam pellentesque interdum dictum. Pellentesque vulputate accumsan elit, sed condimentum ligula interdum in. Cras euismod orci vitae viverra vulputate. Praesent non sapien lacinia, porttitor dolor sit amet, luctus mauris. Nunc vel lacus odio. Mauris vel sem ac sapien bibendum dignissim vel vitae erat. Donec condimentum ornare varius. Aliquam congue nec arcu ut gravida.

              Donec urna velit, aliquam vehicula lectus id, vulputate vestibulum quam. Mauris quis dolor non sapien tempus pellentesque eu vel lacus. Phasellus eget bibendum diam, eget scelerisque odio. Morbi posuere, libero sed aliquet auctor, libero nulla ullamcorper ante, ut tempor dui enim a sapien. Maecenas vehicula ullamcorper nibh, at sodales magna dictum tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque eleifend, risus vitae blandit auctor, dui neque ultrices sapien, at scelerisque ante mi sit amet ipsum.

              Suspendisse potenti. Morbi in euismod tortor. Nulla ultrices nec ex et convallis. Curabitur molestie justo non mi bibendum ultrices. Donec egestas diam et erat tristique, nec finibus nibh tempus. Nullam non molestie justo. Curabitur erat turpis, sagittis ac ligula at, hendrerit elementum velit. Curabitur quis sem eget tortor porttitor fermentum. In egestas iaculis mi, sed vehicula justo tristique vel. Nullam fringilla ante non venenatis faucibus. Donec ullamcorper porta mi vitae tempor. Duis eget magna ligula. Duis laoreet sapien non ante gravida, ac pellentesque ex varius.

            </Typography>
          </Grid>
          <Grid item lg={3}>
            <Typography variant="h3" color="textSecondary" paragraph>
              Você também pode gostar
            </Typography>
            <Divider sx={{ my: 3 }} />
            <TextCardSimple />
            <TextCardSimple />
            <TextCardSimple />
            <TextCardSimple />
          </Grid>
        </Grid>
      </Container>
    </Page >
  );
}

export default Read;