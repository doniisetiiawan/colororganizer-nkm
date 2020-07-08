import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import StarRating from './StarRating';

class Color extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.title = createRef();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount = () => {
    this.style = { backgroundColor: '#CCC' };
  };

  shouldComponentUpdate = (nextProps) => {
    const { rating } = this.props;
    return rating !== nextProps.rating;
  };

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate = (nextProps) => {
    const { title, rating } = this.props;
    this.style = null;
    alert(
      `${title}: rating ${rating} -> ${nextProps.rating}`,
    );
  };

  componentDidUpdate = (prevProps) => {
    const { title, rating } = this.props;
    const status = rating > prevProps.rating ? 'better' : 'worse';
    console.log(`${title} is getting ${status}`);
    this.title.current.style.backgroundColor = '';
    this.title.current.style.color = 'black';
  };

  render() {
    const {
      title,
      color,
      rating,
      onRemove,
      onRate,
    } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 ref={this.title}>{title}</h1>
        <button type="button" onClick={onRemove}>
          X
        </button>
        <div
          className="color"
          style={{ backgroundColor: color }}
        />
        <div>
          <StarRating
            starsSelected={rating}
            onRate={onRate}
          />
        </div>
      </section>
    );
  }
}

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
