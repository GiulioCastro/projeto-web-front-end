import React from 'react';
import clsx from "clsx";
import PropTypes from "prop-types";
import {
	AppBar, Toolbar, Box
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 64,
  },
});

function TopBar({ className, ...rest }) {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Box flexGrow={1} />
      </Toolbar>
    </AppBar>
  );
}

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
