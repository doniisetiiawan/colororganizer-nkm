// eslint-disable-next-line max-len
/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import React, { createRef } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import StarRating from './StarRating';
import '../../stylesheets/Color.scss';
import TimeAgo from './TimeAgo';

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
      color,
      history,
      id,
      onRate,
      onRemove,
      rating,
      timestamp,
      title,
    } = this.props;

    return (
      <section className="color" style={this.style}>
        <h1
          ref={this.title}
          onClick={() => history.push(`/${id}`)}
        >
          {title}
        </h1>
        <button type="button" onClick={onRemove}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <div
          className="color"
          onClick={() => history.push(`/${id}`)}
          style={{ backgroundColor: color }}
        />
        <TimeAgo timestamp={timestamp} />
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

export default withRouter(Color);

Color.propTypes = {
  color: PropTypes.string.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  id: PropTypes.string.isRequired,
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
  rating: PropTypes.number,
  timestamp: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Color.defaultProps = {
  onRate: (f) => f,
  onRemove: (f) => f,
  rating: 0,
};
