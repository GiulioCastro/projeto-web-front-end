import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Card,
	Avatar,
	Box,
	CardContent,
	Divider,
	Drawer,
	Hidden,
	List,
	Typography,
} from '@mui/material';
import {
	Error as AlertCircleIcon,
	BarChart as BarChartIcon,
	Map as MapIcon,
	/* Lock as LockIcon, */
	Settings as SettingsIcon,
	ShoppingBasket as ShoppingBagIcon,
	Person as UserIcon,
	PersonAdd as UserPlusIcon,
	Group as UsersIcon
} from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import NavItem from './components';

const items = [
	{
		href: '/dashboard',
		icon: BarChartIcon,
		title: 'Dashboard'
	},
	{
		href: '/map',
		icon: MapIcon,
		title: 'Map'
	},
	{
		href: '/customers',
		icon: UsersIcon,
		title: 'Customers'
	},
	{
		href: '/products',
		icon: ShoppingBagIcon,
		title: 'Products'
	},
	{
		href: '/account',
		icon: UserIcon,
		title: 'Account'
	},
	{
		href: '/settings',
		icon: SettingsIcon,
		title: 'Settings'
	},
	/* {
		href: '/login',
		icon: LockIcon,
		title: 'Login'
	}, */
	{
		href: '/register',
		icon: UserPlusIcon,
		title: 'Register'
	},
	{
		href: '/404',
		icon: AlertCircleIcon,
		title: 'Error'
	}
];

const user = {
	avatar: '/static/images/avatars/avatar_6.png',
	jobTitle: 'Senior Developer',
	name: 'Katarina Smith'
};

const useStyles = makeStyles((theme) => ({
	mobileDrawer: {
		width: 256
	},
	desktopDrawer: {
		width: 256,
		top: 64,
		height: 'calc(100% - 64px)'
	},
	desktopCard: {
		position: 'sticky',
		top: 64,
		margin: `${theme.spacing(3)} 0px`
	}
}));

function NavBar({ onMobileClose, openMobile }) {
	const classes = useStyles();
	const location = useLocation();

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname]);

	const content = (
		<Box
			height="100%"
			display="flex"
			flexDirection="column"
		>
			<Box
				alignItems="center"
				display="flex"
				flexDirection="column"
				p={2}
			>
				<Avatar
					sx={{ width: 64, height: 64 }}
					component={RouterLink}
					src={user.avatar}
					to="/app/account"
				/>
				<Typography
					className={classes.name}
					color="textPrimary"
					variant="h5"
				>
					{user.name}
				</Typography>
				<Typography
					color="textSecondary"
					variant="body2"
				>
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider />
			<Box p={2}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</List>
			</Box>
			<Box flexGrow={1} />
		</Box>
	);

	return (
		<>
			<Hidden lgUp>
				<Drawer
					anchor="left"
					classes={{ paper: classes.mobileDrawer }}
					onClose={onMobileClose}
					open={openMobile}
					variant="temporary"
				>
					{content}
				</Drawer>
			</Hidden>
			<Hidden lgDown>
				<Card className={classes.desktopCard}>
					<CardContent>
						<List>
							{items.map((item) => (
								<NavItem
									href={item.href}
									key={item.title}
									title={item.title}
									icon={item.icon}
								/>
							))}
						</List>
					</CardContent>
				</Card>
			</Hidden>
		</>
	);
};

NavBar.propTypes = {
	onMobileClose: PropTypes.func,
	openMobile: PropTypes.bool
};

NavBar.defaultProps = {
	onMobileClose: () => { },
	openMobile: false
};

export default NavBar;
