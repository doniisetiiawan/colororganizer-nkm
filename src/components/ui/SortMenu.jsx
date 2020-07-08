/* eslint-disable jsx-a11y/anchor-is-valid,react/no-array-index-key */
import PropTypes from 'prop-types';
import React from 'react';

const options = {
  date: 'SORTED_BY_DATE',
  title: 'SORTED_BY_TITLE',
  rating: 'SORTED_BY_RATING',
};

const SortMenu = ({ sort, onSelect }) => (
  <nav className="menu">
    <h1>Sort Colors</h1>
    {Object.keys(options).map((item, i) => (
      <a
        key={i}
        href="#"
        className={
            sort === options[item] ? 'selected' : null
          }
        onClick={(e) => {
          e.preventDefault();
          onSelect(item);
        }}
      >
        {item}{' '}
      </a>
    ))}
  </nav>
);
export default SortMenu;

SortMenu.propTypes = {
  onSelect: PropTypes.func,
  sort: PropTypes.string,
};

SortMenu.defaultProps = {
  onSelect: (f) => f,
  sort: 'SORTED_BY_DATE',
};
