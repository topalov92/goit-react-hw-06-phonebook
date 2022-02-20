import React from 'react';
import PropTypes from 'prop-types';

import { LabelStyled, InputStyled } from './Input.styles';

export const Input = ({
  id,
  type,
  label,
  name,
  placeholder,
  value,
  onChange,
  title,
  required,
  ...allProps
}) => {
  return (
    <>
      <LabelStyled htmlFor={id}>{label}</LabelStyled>
      <InputStyled
        id={id}
        type={type}
        name={name}
        {...allProps}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        title={title}
        required={required}
      />
    </>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  title: '',
  required: false,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  required: PropTypes.bool,
};
