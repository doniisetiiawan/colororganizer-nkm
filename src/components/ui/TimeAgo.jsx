import PropTypes from 'prop-types';
import React from 'react';
import { ago } from '../../lib/time-helpers';

const TimeAgo = ({ timestamp }) => (
  <div className="time-ago">{ago(timestamp)}</div>
);

export default TimeAgo;

TimeAgo.propTypes = {
  timestamp: PropTypes.string,
};

TimeAgo.defaultProps = {
  timestamp: '',
};
