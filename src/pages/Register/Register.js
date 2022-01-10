import React from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Link,
  Typography,
  IconButton
} from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { makeStyles } from '@mui/styles';

import Page from 'components/Page';
import { FormikTextField } from 'components/formElements';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const validationSchema = Yup.object({
  email: Yup.string().email('Digite um email válido').max(255).required('Email é obrigatório'),
  firstName: Yup.string().max(255).required('First name is required'),
  lastName: Yup.string().max(255).required('Last name is required'),
  password: Yup.string().max(255).required('Email é obrigatório'),
  confirmPassword: Yup.string().max(255).required('Email é obrigatório'),
});

function Register() {
  const classes = useStyles();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: () => {
      navigate('/home');
    }
  });

  return (
    <Page className={classes.root} title="Registrar">
      <Box
        display="flex"
        flexDirection="column"
        height="100%"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box mb={1} position="relative">
              <IconButton onClick={() => navigate('/login')} sx={{ position: 'absolute', top: '25%' }}>
                <ArrowBackIcon />
              </IconButton>
              <Typography
                color="textPrimary"
                variant="h2"
                align="center"
              >
                Criar nova conta
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
                align="center"
              >
                Use seu email para criar uma nova conta
              </Typography>
            </Box>
            <FormikTextField
              fullWidth
              label="Nome"
              name="firstName"
              margin="normal"
              formik={formik}
            />
            <FormikTextField
              fullWidth
              label="Sobrenome"
              name="lastName"
              margin="normal"
              formik={formik}
            />
            <FormikTextField
              fullWidth
              label="Email"
              name="email"
              margin="normal"
              formik={formik}
            />
            <FormikTextField
              fullWidth
              label="Senha"
              name="password"
              type="password"
              margin="normal"
              formik={formik}
            />
            <FormikTextField
              fullWidth
              label="Confirmar Senha"
              name="confirmPassword"
              type="password"
              margin="normal"
              formik={formik}
            />
            <Box my={2}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Registrar
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Possui uma conta?
              {' '}
              <Link
                component={RouterLink}
                to="/login"
                variant="h6"
              >
                Entrar
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export default Register;