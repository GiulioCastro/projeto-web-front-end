import { createStyles, colors } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => createStyles({
	'@global': {
		'*': {
			boxSizing: 'border-box',
			margin: 0,
			padding: 0,
		},
		html: {
			'-webkit-font-smoothing': 'antialiased',
			'-moz-osx-font-smoothing': 'grayscale',
			height: '100%',
			width: '100%'
		},
		body: {
			backgroundColor: theme.palette.background.default,
			height: '100%',
			width: '100%'
		},
		"::-webkit-scrollbar": {
			height: theme.spacing(0.5),
			width: theme.spacing(0.5)
		},
		"::-webkit-scrollbar-track": {
			background: colors.grey[300]
		},
		"::-webkit-scrollbar-thumb": {
			background: colors.grey[600],
			'&:hover': {
				background: colors.grey[800]
			}
		},
		a: {
			textDecoration: 'none'
		},
		'#root': {
			height: '100%',
			width: '100%'
		}
	}
}));

const GlobalStyles = () => {
	useStyles();
	return null;
};

export default GlobalStyles;