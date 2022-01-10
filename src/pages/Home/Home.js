import { useEffect } from 'react';

import {
  Container,
  Box, Grid,
  Button, Divider,
  Card, CardContent, Typography
} from '@mui/material';

import Page from 'components/Page';
import TextCard from 'components/TextCard';
import WriterRecommendationList from 'components/WriterRecommendationList';
import SearchBar from 'components/SearchBar';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  positionSticky: {
    position: 'sticky',
    top: '64px'
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Homepage">
      <Grid container spacing={3}>
        <Grid item lg={9}>
          <TextCard />
          <TextCard />
          <TextCard />
          <TextCard />
          <TextCard />
          <TextCard />
          <TextCard />
        </Grid>
        <Grid item lg={3}>
          <div className={classes.positionSticky}>
            <SearchBar />
            <WriterRecommendationList />
          </div>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;
