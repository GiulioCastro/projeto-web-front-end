import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box, Grid,
  Button,
  Card, CardContent
} from '@mui/material';

import { makeStyles } from '@mui/styles';

import Page from 'components/Page';
import TextCard from 'components/TextCard';
import WriterRecommendationList from 'components/WriterRecommendationList';
import { FormikSelect, FormikTextField, FormikAutocomplete } from 'components/formElements';

const validationSchema = Yup.object({
  title: Yup.string(),
  tags: Yup.string(),
  category: Yup.string(),
});

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

function App() {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      title: '',
      tags: [],
      category: '',
    },
    validationSchema,
    onSubmit: (values) => {
      window.alert(JSON.stringify(values))
    }
  });

  return (
    <Page className={classes.root} title="Homepage">
      <Grid container spacing={3}>
        <Grid item lg={9}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={3} sx={{ mb: 3 }}>
                  <Grid item xs={12} md={6} lg>
                    <FormikTextField fullWidth formik={formik} name="title" label="Título" size="small" />
                  </Grid>
                  <Grid item xs={12} md={6} lg>
                    <FormikAutocomplete
                      multiple
                      filterSelectedOptions
                      fullWidth
                      name="tags"
                      formik={formik}
                      label="Tags"
                      options={[{ value: 1, label: "a" }, { value: 2, label: "b" }]}
                      optionLabel="label"
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg>
                    <FormikSelect
                      fullWidth
                      size="small"
                      formik={formik}
                      name="category"
                      label="Categoria"
                      options={[{ value: 1, label: "categoria 1" }, { value: 2, label: "categoria 2" }]}
                    />
                  </Grid>
                </Grid>
                <Box display="flex" justifyContent="flex-end">
                  <Button type="submit" color="primary" variant="contained">
                    Pesquisar
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
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
            <WriterRecommendationList />
          </div>
        </Grid>
      </Grid>
      {/* <Grid container>
        <Grid item xs>
          <ActivityItem Icon={AutoStoriesIcon} />
        </Grid>
        <Grid item xs>
          <ActivityItem Icon={HistoryEduIcon} />
        </Grid>
        <Grid item xs>
          <ActivityItem Icon={StarIcon} />
        </Grid>
      </Grid> */}
    </Page>
  );
}

export default App;
