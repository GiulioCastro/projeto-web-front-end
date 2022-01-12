import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Box, Button,
  Container,
  Link, Typography,
} from '@mui/material';

import { makeStyles } from '@mui/styles';

import Page from 'components/Page';
import { FormikTextField } from 'components/formElements';

import { useAuth } from 'hooks';

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
  password: Yup.string().required('Senha é obrigatória'),
});

function Login() {
  const classes = useStyles();
  const { signIn } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: handleSignIn
  });

  function handleSignIn(values) {
    /* console.log(values) */
    signIn("token")
  }

  return (
    <Page className={classes.root} title="Login">
      <Box
        display="flex"
        height="100%"
        width="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box mb={1}>
              <Typography
                color="textPrimary"
                variant="h1"
                align="center"
              >
                Entrar
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
                align="center"
              >
                Bem vindo de volta!
              </Typography>
            </Box>
            <FormikTextField
              fullWidth
              formik={formik}
              margin="normal"
              name="email"
              label="Email"
            />
            <FormikTextField
              fullWidth
              formik={formik}
              margin="normal"
              name="password"
              type="password"
              label="Senha"
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
                Entrar
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body1"
            >
              Não tem uma conta?
              {' '}
              <Link
                component={RouterLink}
                to="/register"
                variant="h6"
              >
                Inscrever-se
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </Page>
  );
};

export default Login;