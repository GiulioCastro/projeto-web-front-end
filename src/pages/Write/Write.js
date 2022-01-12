import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import {
  Container, Grid, Avatar,
  IconButton, Button, ButtonBase
} from '@mui/material';

import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

import Page from 'components/Page';
import { FormikSelect, FormikTextField, FormikAutocomplete } from 'components/formElements';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const validationSchema = Yup.object({
  title: Yup.string().required('Este campo é obrigatório'),
  tags: Yup.array().required('Este campo é obrigatório'),
  category: Yup.string().required('Este campo é obrigatório'),
  text: Yup.string(),
});

const modules = {
  toolbar: [
    ['bold', 'italic', 'underline'],
    [{ 'align': [] }],
    ['image'],
  ],
};

const formats = [
  'bold', 'italic', 'underline',
  'align',
  'image'
];

function Write() {
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      title: '',
      tags: [],
      category: '',
      description: '',
      text: ''
    },
    validationSchema,
    onSubmit: (values) => {
      window.alert(JSON.stringify(values))
    }
  });

  return (
    <Page className={classes.root} title="Write">
      <Container maxWidth="xl">
        <form onSubmit={formik.handleSubmit}>
          <Grid container justifyContent="space-between" sx={{ mb: 3 }}>
            <Grid item xs="auto">
              <IconButton onClick={() => navigate('/home')}>
                <ArrowBackIcon />
              </IconButton>
            </Grid>
            <Grid item xs="auto">
              <Button type="submit" color="primary" variant="contained">
                <CheckIcon fontSize="small" /> Salvar
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="center" sx={{ mb: 3 }}>
            <Grid item xs="auto">
              <input
                type="file"
                accept="image/*"
                id="text-banner"
                onChange={(e) => formik.setFieldValue('banner', e.target.files?.[0])}
                style={{ display: 'none' }}
              />
              <ButtonBase component="label" htmlFor="text-banner">
                <Avatar
                  alt="text-banner"
                  title="Text banner"
                  src=""
                  variant="square"
                  sx={{ width: 320, height: 180 }}
                >
                  <PhotoCameraIcon fontSize="large" />
                </Avatar>
              </ButtonBase>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ mb: 3 }} justifyContent="flex-end">
            <Grid item xs={12} md={4}>
              <FormikTextField fullWidth formik={formik} name="title" label="Título" size="small" />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormikAutocomplete
                multiple
                filterSelectedOptions
                fullWidth
                name="tags"
                formik={formik}
                label="Tags"
                options={[{ value: 1, label: "Tag 1" }, { value: 2, label: "Tag 2" }]}
                optionLabel="label"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormikSelect
                fullWidth
                size="small"
                formik={formik}
                name="category"
                label="Categoria"
                options={[{ value: 1, label: "Categoria 1" }, { value: 2, label: "Categoria 2" }]}
              />
            </Grid>
            <Grid item xs={12}>
              <FormikTextField
                fullWidth
                multiline
                rows={3}
                formik={formik}
                name="description"
                label="Descrição"
              />
            </Grid>
          </Grid>
          <ReactQuill
            value={formik.values.text}
            onChange={(value) => formik.setFieldValue('text', value)}
            theme="snow"
            modules={modules}
            formats={formats}
          />
        </form>
      </Container>
    </Page >
  );
}

export default Write;