/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';
import Star from './Star';

const StarRating = ({
  starsSelected,
  totalStars,
  onRate,
}) => (
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) => (
      <Star
        key={i}
        selected={i < starsSelected}
        onClick={() => onRate(i + 1)}
      />
    ))}
    <p>
      {starsSelected} of {totalStars} stars
    </p>
  </div>
);

export default StarRating;

StarRating.propTypes = {
  onRate: PropTypes.func,
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
};

StarRating.defaultProps = {
  onRate: (f) => f,
  starsSelected: 0,
  totalStars: 5,
};
