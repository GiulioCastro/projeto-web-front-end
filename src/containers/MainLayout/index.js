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
		overflow: 'hidden',
		width: '100%'
	},
	wrapper: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
		paddingTop: 64
	},
	contentContainer: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden'
	},
	content: {
		flex: '1 1 auto',
		height: '100%',
		overflow: 'auto'
	}
}));

function MainLayout() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<TopBar />
			<Container maxWidth="xl">
				<Grid container>
					<Grid item lg={2}>
						<NavBar />
					</Grid>
					<Grid item xs={12} lg={10}>
						<Outlet />
					</Grid>
				</Grid>
			</Container>
			{/* <div className={classes.wrapper}>
				<div className={classes.contentContainer}>
					<div className={classes.content}>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default MainLayout;
