import React from "react";
import PropTypes from "prop-types";
import { TextField } from '@mui/material';

const propTypes = {
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  variant: PropTypes.string,
  loading: PropTypes.bool,
  defaultOption: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  }))
};

const defaultProps = {
  options: [],
  loading: false,
  variant: 'outlined',
  defaultOption: false,
};

function FormikSelect(props) {
  const { name, formik, options, loading, defaultOption, ...rest } = props;
  return (
    <TextField
      select
      SelectProps={{ native: true }}
      id={name}
      name={name}
      onChange={formik.handleChange} 
      value={loading ? '-1' : formik.values[name]}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...rest}
    >
      {loading && <option value="-1">Carregando</option>}
      {defaultOption && <option value="">Selecione</option>}
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </TextField>
  );
}

FormikSelect.propTypes = propTypes;
FormikSelect.defaultProps = defaultProps;

export default FormikSelect;