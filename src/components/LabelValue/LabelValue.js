import React from 'react';
import PropTypes from "prop-types";
import clsx from 'clsx';
import { Box, Typography } from '@mui/material';

import useStyles from './LabelValue.styles';

const propTypes = {
    color: PropTypes.string,
    variant: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

const defaultProps = {
    color: 'textSecondary',
    variant: 'body1',
    value: '--'
};

function LabelValue({ label, value, className, color, variant, ...rest }) {
    const classes = useStyles();
    return (
        <Box className={clsx(classes.wrapper, className)} {...rest}>
            <Typography color={color} variant={variant} component="b" display="inline">{`${label}: `}</Typography>
            <Typography color={color} variant={variant} component="span" display="inline">{value}</Typography>
        </Box>
    )
};

LabelValue.propTypes = propTypes;
LabelValue.defaultProps = defaultProps;

export default LabelValue;