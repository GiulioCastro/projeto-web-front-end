import React from "react";
import PropTypes from "prop-types";
import { TextField } from '@mui/material';

const propTypes = {
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  variant: PropTypes.string
};

const defaultProps = {
  variant: 'outlined',
};

function FormikTextField(props) {
  const { name, formik, ...rest } = props;

  return (
    <TextField
      id={name}
      name={name}
      value={formik.values[name]}
      onChange={(e) => formik.setFieldValue(name, e.target.value)}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...rest}
    />
  );
}

FormikTextField.propTypes = propTypes;
FormikTextField.defaultProps = defaultProps;

export default FormikTextField;