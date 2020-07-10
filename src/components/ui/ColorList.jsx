import PropTypes from 'prop-types';
import React from 'react';
import Color from './Color';
import '../../stylesheets/ColorList.scss';

const ColorList = ({ colors, onRate, onRemove }) => (
  <div className="color-list">
    {colors.length === 0 ? (
      <p>No Colors Listed. (Add a Color)</p>
    ) : (
      colors.map((color) => (
        <Color
          key={color.id}
          {...color}
          onRate={(rating) => onRate(color.id, rating)}
          onRemove={() => onRemove(color.id)}
        />
      ))
    )}
  </div>
);
export default ColorList;

ColorList.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object),
  onRate: PropTypes.func,
  onRemove: PropTypes.func,
};

ColorList.defaultProps = {
  colors: {},
  onRate: (f) => f,
  onRemove: (f) => f,
};
