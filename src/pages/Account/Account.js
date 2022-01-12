import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Profile, ProfileDetails } from './components';
import Page from 'components/Page';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.dark,
		minHeight: '100%',
		paddingBottom: theme.spacing(3),
		paddingTop: theme.spacing(3)
	}
}));

function Account() {
	const classes = useStyles();
	return (
		<Page className={classes.root} title="Account">
			<Grid container spacing={3}>
				<Grid item lg={4} md={6} xs={12}>
					<Profile />
				</Grid>
				<Grid item lg={8} md={6} xs={12}>
					<ProfileDetails />
				</Grid>
			</Grid>
		</Page>
	);
};

export default Account;
