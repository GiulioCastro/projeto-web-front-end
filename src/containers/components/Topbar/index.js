import React from 'react';
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import {
  AppBar, Toolbar, Box, Typography,
  IconButton, Avatar, InputBase,
  Hidden,
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

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

function TopBar({ onMobileNavOpen, className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} color="secondary" {...rest}>
      <Toolbar className={classes.toolbar}>
        {onMobileNavOpen && (
          <Hidden lgUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMobileNavOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
        )}
        <div className={classes.brand}>
          <Typography variant="h4" component={Link} to="/home">
            LOGO
          </Typography>
        </div>
        <Box flexGrow={1} />
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Pesquisar…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box flexGrow={1} />
        <IconButton
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => { }}
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
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
