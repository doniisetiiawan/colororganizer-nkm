import PropTypes from 'prop-types';
import React from 'react';
import StarRating from './StarRating';

const Color = ({
  title,
  color,
  rating,
  onRemove,
  onRate,
}) => (
  <section className="color">
    <h1>{title}</h1>
    <button type="button" onClick={onRemove}>X</button>
    <div
      className="color"
      style={{ backgroundColor: color }}
    />
    <div>
      <StarRating starsSelected={rating} onRate={onRate} />
    </div>
  </section>
);

export default Color;

Color.propTypes = {
  color: PropTypes.string.isRequired,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
  rating: PropTypes.number,
  title: PropTypes.string.isRequired,
};

Color.defaultProps = {
  onRate: (f) => f,
  onRemove: (f) => f,
  rating: 0,
};
