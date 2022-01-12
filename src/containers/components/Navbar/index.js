import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Card,
	Box,
	CardContent,
	Divider,
	Drawer,
	Hidden,
	List,
	IconButton
} from '@mui/material';
import {
	Home as HomeIcon,
	HistoryEdu as HistoryEduIcon,
	Search as SearchIcon,
	Person as UserIcon,
	Logout as LogoutIcon,
	ArrowBack as ArrowBackIcon,
} from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import NavItem from './components';
import useAuth from 'hooks/useAuth';

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
	const { signOut } = useAuth();

	useEffect(() => {
		if (openMobile && onMobileClose) {
			onMobileClose();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location?.pathname]);

	const items = [
		{
			href: '/home',
			icon: HomeIcon,
			title: 'Home'
		},
		{
			href: '/write',
			icon: HistoryEduIcon,
			title: 'Escreva'
		},
		{
			href: '/search',
			icon: SearchIcon,
			title: 'Procurar'
		},
		{
			href: '/account',
			icon: UserIcon,
			title: 'Conta'
		},
		{
			onClick: signOut,
			href: '#',
			icon: LogoutIcon,
			title: 'Sair'
		},
	];

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
					<Box
						height="100%"
						display="flex"
						flexDirection="column"
					>
						<Box display="flex" p={1}>
							<IconButton onClick={() => onMobileClose()}>
								<ArrowBackIcon color="secondary" />
							</IconButton>
						</Box>
						<Divider />
						<Box p={2}>
							<List>
								{items.map((item) => <NavItem key={item.title} {...item} />)}
							</List>
						</Box>
						<Box flexGrow={1} />
					</Box>
				</Drawer>
			</Hidden>
			<Hidden lgDown>
				<Card className={classes.desktopCard}>
					<CardContent>
						<List>
							{items.map((item) => <NavItem key={item.title} {...item} />)}
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
