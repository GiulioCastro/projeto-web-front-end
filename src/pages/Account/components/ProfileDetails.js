import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
	Box, Grid,
	Button, Divider,
	Card, CardContent,
	CardHeader
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FormikTextField } from 'components/formElements';

const useStyles = makeStyles(() => ({
	root: {}
}));

const validationSchema = Yup.object({
	firstName: Yup.string().required('Campo obrigatório'),
	lastName: Yup.string().required('Campo obrigatório'),
	email: Yup.string().email('Digite um email válido').required('Campo obrigatório'),
	phone: Yup.string().required('Campo obrigatório'),
});

function ProfileDetails({ className, ...rest }) {
	const classes = useStyles();
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			phone: '',
		},
		validationSchema,
		onSubmit: (values) => {
			window.alert(JSON.stringify(values))
		}
	});

	return (
		<Card {...rest} className={clsx(classes.root, className)}>
			<CardHeader title="Perfil" />
			<Divider />
			<form onSubmit={formik.handleSubmit}>
				<CardContent>
					<Grid container spacing={3}>
						<Grid item md={6} xs={12}>
							<FormikTextField fullWidth formik={formik} name="firstName" label="Nome" />
						</Grid>
						<Grid item md={6} xs={12}>
							<FormikTextField fullWidth formik={formik} name="lastName" label="Sobrenome" />
						</Grid>
						<Grid item md={6} xs={12}>
							<FormikTextField fullWidth formik={formik} name="email" label="Email" />
						</Grid>
						<Grid item md={6} xs={12}>
							<FormikTextField fullWidth formik={formik} name="phone" label="Telefone" />
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<Box display="flex" justifyContent="flex-end" p={2}>
					<Button type="submit" color="primary" variant="contained">
						Salvar
					</Button>
				</Box>
			</form>
		</Card>
	);
};

ProfileDetails.propTypes = {
	className: PropTypes.string
};

export default ProfileDetails;
