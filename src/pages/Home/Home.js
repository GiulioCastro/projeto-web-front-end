import { useEffect } from 'react';

import {
  Container,
  Box, Grid,
  Button, Divider,
  Card, CardContent, Typography
} from '@mui/material';

import TextCard from './components/TextCard';

function Home() {

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Grid item xs={9}>
          <TextCard />
          <TextCard />
          <TextCard />
          <TextCard />
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography color="text.secondary">

              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
