// src/components/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, variant, disabled }) => {
  return (
    <button
      className={`custom-button ${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  disabled: false,
};

export default Button;
