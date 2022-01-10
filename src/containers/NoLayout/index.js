import React from 'react';
import { Outlet } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		height: '100%',
		width: '100%'
	},
}));

function NoLayout() {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Outlet />
		</div>
	);
};

export default NoLayout;