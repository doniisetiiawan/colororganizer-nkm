/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Star from './Star';
import './styles.css';

export class StarRating extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starsSelected: props.starsSelected || 0,
    };
  }

  change = (starsSelected) => {
    this.setState({ starsSelected });
  };

  render() {
    const { totalStars } = this.props;
    const { starsSelected } = this.state;

    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onClick={() => this.change(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  }
}

export default StarRating;

StarRating.propTypes = {
  starsSelected: PropTypes.number,
  totalStars: PropTypes.number,
};

StarRating.defaultProps = {
  starsSelected: 0,
  totalStars: 5,
};
