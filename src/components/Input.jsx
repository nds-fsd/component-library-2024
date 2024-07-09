// src/components/Input.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ variant, placeholder, value, onChange, disabled }) => {
  return (
    <input
      className={`custom-input ${variant}`}
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

Input.propTypes = {
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  variant: 'default',
  placeholder: '',
  value: '',
  onChange: () => {},
  disabled: false,
};

export default Input;
