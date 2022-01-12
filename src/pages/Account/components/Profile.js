import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { format as formatDate } from 'date-fns';
import {
	Avatar,
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
	Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const user = {
	avatar: '',
	name: 'Nome do usuário',
	city: 'Los Angeles',
	country: 'USA',
	timezone: 'GTM-7'
};

const useStyles = makeStyles(() => ({
	root: {},
}));

function Profile({ className, ...rest }) {
	const classes = useStyles();
	return (
		<Card className={clsx(classes.root, className)} {...rest}>
			<CardContent>
				<Box
					alignItems="center"
					display="flex"
					flexDirection="column"
				>
					<Avatar
						sx={{ width: 100, height: 100, mb: 1 }}
						src={user.avatar}
					/>
					<Typography
						color="textPrimary"
						gutterBottom
						variant="h3"
					>
						{user.name}
					</Typography>
					<Typography
						className={classes.dateText}
						color="textSecondary"
						variant="body1"
					>
						{`${formatDate(new Date(), 'hh:mm aa')} ${user.timezone}`}
					</Typography>
				</Box>
			</CardContent>
			<Divider />
			<CardActions>
				<Button
					color="primary"
					fullWidth
					variant="text"
				>
					Escolher foto
				</Button>
			</CardActions>
		</Card>
	);
};

Profile.propTypes = {
	className: PropTypes.string
};

export default Profile;
