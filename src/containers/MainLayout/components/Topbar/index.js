import React from 'react';
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link, NavLink } from 'react-router-dom';
import {
  AppBar, Toolbar, Box, Typography,
  Button, IconButton, Avatar
} from '@mui/material';

import {
	Person as PersonIcon
} from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';

import { useGlobalState } from 'providers/global';

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    height: 64,
    '& ul': {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
      '& li': {
        padding: theme.spacing(1.5),
        '& a': {
          color: alpha(theme.palette.text.primary, 0.6),
          [`&:hover, &.active`]: {
            color: theme.palette.text.primary,
          }
        }
      }
    }
  },
  brand: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    marginRight: theme.spacing(2),
    '& a': {
      color: theme.palette.text.primary,
    }
  },
}));

function TopBar({ className, ...rest }) {
  const classes = useStyles();
  const { isAuthenticated } = useGlobalState();
  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.brand}>
          <Typography variant="h4" component={Link} to="/home">
            Placeholder
          </Typography>
        </div>
        <ul>
          <li>
            <Typography variant="body1" component={NavLink} to="/escrever">
              Escrever
            </Typography>
          </li>
          <li>
            <Typography variant="body1" component={NavLink} to="/tags">
              Tags
            </Typography>
          </li>
        </ul>
        <Box flexGrow={1} />
        {isAuthenticated ? (
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            className={classes.menuButton}
            onClick={() => {}}
          >
            <Avatar
              alt="user-team-logo"
              title="Foto do usuário"
              src={''}
              className={classes.userPhoto}
            >
              <PersonIcon color="action" />
            </Avatar>
          </IconButton>
        ) : (
          <Button
            variant="contained"
            disableElevation
            color="secondary"
            className={classes.loginButton}
            onClick={() => {}}
            size="small"
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
