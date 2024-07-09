// src/components/Text.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Text.css';

const Text = ({ content }) => {
  return <p className="custom-text">{content}</p>;
};

Text.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Text;
