import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  Container,
  Box, Grid,
  Avatar,
  IconButton,
  Divider, Chip,
  Typography,
  Rating, Checkbox
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
          src="https://d.wattpad.com/story_parts/631045031/images/155445fe0d261d091332888716.jpg"
          alt="Paella dish"
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
                alt="Remy Sharp"
                src="https://img.wattpad.com/useravatar/Random_Rice.128.23658.jpg"
                sx={{ width: 64, height: 64, mb: 1 }}
              />
              <Typography variant="h6" color="textSecondary">
                by Random_Rice
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
            <LabelValue label="Palavras" value="3587" variant="body2" textAlign="center" />
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
                <IconButton onClick={() => navigate('/home')}>
                  <ArrowBackIcon color="secondary" />
                </IconButton>
              </Grid>
              <Grid item xs="auto">
                <Checkbox
                  inputProps={{ 'aria-label': 'Favorite text' }}
                  icon={<FavoriteBorderIcon />}
                  checkedIcon={<FavoriteIcon sx={{ color: pink[500] }} />}
                  onChange={() => setFavorite(!favorite)}
                  checked={favorite}
                />
              </Grid>
            </Grid>
            <Typography variant="h2" align="center">
              The Below - Cyberpunk Adventure
            </Typography>
            <Divider variant="middle" sx={{ my: 4 }} />
            <Typography>
              {`-John Baker\nJohn Baker was born on November 6th 1926 in Boston USA. At the age of 19 served as a combat medic in the second world war, after the war he returned to USA and settled in Las Vegas and worked as a detective in his own detective agency.\n\n-Alisson Mullins (Allie)\nAllison Mullins was born on September 9th 1930 in Brighton England. At the age of six Allison and her parents immigrated to Seattle USA. Later she started studying journalism and became a journalist in Las Vegas.\n\nLas Vegas, September 8th 1952,\nJohn Baker's house, 20:00.\n\nAs John was standing on the balcony and listening to the news report on his radio he suddenly heard an unusual sound on the radio, the news report got cut out by a strange deep voice that sounded pre-recorded, the voice said...\n"This is an official goverment announcment, the goverment is developing a secret project that will help the people of our nation and the goverment will be inviting a small amount of people to help with the project. The eligible people will be invited in the upcoming days."\nAfter the announcment the news report continued without a mention of the strange announcment. John didn't take the announcment seriously and went to his bed.\n\n21:30\n\nJohn was woken up by a loud knocking on the front door of his home. He got out of bed and went to the front door, he opened the door and was surprised that nobody was behind the door, as he closed the door he noticed a letter on the floor. He opened the letter...\n\n"To John Baker a true patriot of our country. This is Dr.Williams the head of the "Below Project". You have been invited to help the goverment with this project. For more information visit your local recruitment office."\n\nSeptember 9th, 20:30\n\nAfter recieving the invitation John decided to go to his local recruitment office. John was filled with concern. as he entered the building he saw an officer that asked him...\n1\n\n-Officer: "John Baker is that right?"\n\n-John: "Thats right!"\n\n-Officer: "Follow me please!"\n\nJohn followed the officer to his office.\n\n-Officer: "Please sit down!"\n\n-Officer: "It says here that you're a veteran is that true?"\n\n-John: "Yes sir!"\n\n-Officer: "Where did you serve if you dont mind me asking?"`}
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