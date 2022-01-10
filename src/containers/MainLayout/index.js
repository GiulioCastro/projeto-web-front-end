import React from 'react';
import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { TopBar, NavBar } from './components';

import {
	Container, Grid
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		display: 'flex',
		height: '100%',
		width: '100%'
	},
	wrapper: {
		display: 'flex',
		flex: '1 1 auto',
		paddingTop: 64,
	},
}));

function MainLayout() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<TopBar />
			<Container maxWidth="xl" className={classes.wrapper}>
				<Grid container spacing={3}>
					<Grid item lg={2} >
						<NavBar />
					</Grid>
					<Grid item xs={12} lg={10}>
						<Outlet />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
};

export default MainLayout;
