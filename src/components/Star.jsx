/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';

const Star = ({ selected, onClick }) => (
  <div
    className={(selected) ? 'star selected' : 'star'}
    onClick={onClick}
  />
);

export default Star;

Star.propTypes = {
  onClick: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};
