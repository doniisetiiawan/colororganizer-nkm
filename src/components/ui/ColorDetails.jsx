/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import React from 'react';
import Whoops404 from './Whoops404';
import '../../stylesheets/ColorDetails.scss';

const ColorDetails = ({
  color,
  history,
  location,
  title,
}) => (!color ? (
  <Whoops404 location={location} />
) : (
  <div
    className="color-details"
    style={{ backgroundColor: color }}
    onClick={() => history.goBack()}
  >
    <h1>{title}</h1>
    <h1>{color}</h1>
  </div>
));

ColorDetails.propTypes = {
  color: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  location: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default ColorDetails;
