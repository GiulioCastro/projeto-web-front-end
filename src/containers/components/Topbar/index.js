import React, { useMemo } from 'react';
import clsx from "clsx";
import PropTypes from "prop-types";
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Box, Typography,
  IconButton, Avatar, InputBase,
  Hidden,
  ButtonBase,
  Divider,
  Menu, MenuItem,
  ListItemIcon
} from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import LogoutIcon from '@mui/icons-material/Logout';

import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';

import { useThemeState } from 'providers/theme';
import { useAuth } from 'hooks';

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
  const [anchorMenuEl, setAnchorMenuEl] = React.useState(null);
  const { darkMode, toggleDarkMode } = useThemeState();
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const openMenu = useMemo(() => Boolean(anchorMenuEl), [anchorMenuEl]);

  function handleOpenMenu(event) {
    setAnchorMenuEl(event.currentTarget);
  }

  function handleCloseMenu() {
    setAnchorMenuEl(null);
  }

  const userMenu = (
    <Menu
      anchorEl={anchorMenuEl}
      id="account-menu"
      open={openMenu}
      onClose={handleCloseMenu}
      onClick={handleCloseMenu}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem onClick={() => navigate('/account')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        Minha Conta
      </MenuItem>
      <MenuItem onClick={toggleDarkMode}>
        <ListItemIcon>
          {darkMode ? <Brightness7Icon fontSize="small" /> : <Brightness4Icon fontSize="small" />}
        </ListItemIcon>
        Modo {darkMode ? 'claro' : 'escuro'}
      </MenuItem>
      <MenuItem onClick={signOut}>
        <ListItemIcon>
          <LogoutIcon fontSize="small" />
        </ListItemIcon>
        Sair
      </MenuItem>
    </Menu>
  )

  return (
    <>
      {userMenu}
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
          <ButtonBase
            disableRipple
            onClick={handleOpenMenu}
            aria-controls={openMenu ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={openMenu ? 'true' : undefined}
          >
            <Avatar
              alt="user-team-logo"
              title="Foto do usuário"
              src="https://mui.com/static/images/avatar/3.jpg"
              sx={{ mr: 1 }}
            >
              <PersonIcon color="action" />
            </Avatar>
            Sandra Adams
          </ButtonBase>
        </Toolbar>
      </AppBar>
    </>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
