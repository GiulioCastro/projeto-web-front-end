import React from "react";
import PropTypes from "prop-types";
import { TextField } from '@mui/material';
import { Autocomplete } from '@mui/lab';

const propTypes = {
  name: PropTypes.string.isRequired,
  formik: PropTypes.object.isRequired,
  options: PropTypes.array,
  optionLabel: PropTypes.string,
  optionValue: PropTypes.string,
  variant: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

const defaultProps = {
  options: [],
  optionLabel: 'label',
  optionValue: 'value',
  variant: 'outlined',
  noOptionsText: 'Sem opções',
};

function FormikAutocomplete(props) {
  const { name, formik, optionLabel, optionValue, variant, label, placeholder, ...rest } = props;

  return (
    <Autocomplete
      {...rest}
      id={name}
      name={name}
      getOptionLabel={(option) => option[optionLabel]}
      isOptionEqualToValue={(option, value) => option[optionValue] === value[optionValue]}
      value={formik.values[name]}
      onChange={(e, value) => formik.setFieldValue(name, value)}
      renderInput={(params) => (
        <TextField
          error={formik.touched[name] && Boolean(formik.errors[name])}
          helperText={formik.touched[name] && formik.errors[name]}
          variant={variant}
          label={label}
          placeholder={placeholder}
          {...params}
        />
      )}
    />
  );
}

FormikAutocomplete.propTypes = propTypes;
FormikAutocomplete.defaultProps = defaultProps;

export default FormikAutocomplete;