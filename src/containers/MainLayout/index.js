import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { TopBar, NavBar } from 'containers/components';

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
	const [isMobileNavOpen, setMobileNavOpen] = useState(false);
	return (
		<div className={classes.root}>
			<TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
			<Container maxWidth="xl" className={classes.wrapper}>
				<Grid container spacing={3}>
					<Grid item lg={2} >
						<NavBar
							onMobileClose={() => setMobileNavOpen(false)}
							openMobile={isMobileNavOpen}
						/>
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
