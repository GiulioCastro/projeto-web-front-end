import { Grid, useMediaQuery } from '@mui/material';

import Page from 'components/Page';
import TextCard from 'components/TextCard';
import TextCardSimple from 'components/TextCardSimple';
import WriterRecommendationList from 'components/WriterRecommendationList';

import { makeStyles, useTheme } from '@mui/styles';

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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Page className={classes.root} title="Homepage">
      <Grid container spacing={3}>
        <Grid item xs={12} lg={9}>
          {Array(8).fill(null).map((_, index) => isMobile ? <TextCardSimple key={index} /> : <TextCard key={index} />)}
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className={classes.positionSticky}>
            <WriterRecommendationList />
          </div>
        </Grid>
      </Grid>
    </Page>
  );
}

export default Home;