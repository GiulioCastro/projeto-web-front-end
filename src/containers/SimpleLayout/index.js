import React from 'react';
import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { TopBar } from 'containers/components';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		height: '100%',
		width: '100%'
	},
	wrapper: {
		paddingTop: 64,
	},
}));

function NoLayout() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<TopBar />
			<div className={classes.wrapper}>
				<Outlet />
			</div>
		</div>
	);
};

export default NoLayout;