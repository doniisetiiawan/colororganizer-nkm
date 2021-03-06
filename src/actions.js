/* eslint-disable no-nested-ternary */
import { v4 } from 'uuid';
import C from './constants';

export const addColor = (title, color) => ({
  type: C.ADD_COLOR,
  id: v4(),
  title,
  color,
  timestamp: new Date().toString(),
});

export const removeColor = (id) => ({
  type: C.REMOVE_COLOR,
  id,
});

export const rateColor = (id, rating) => ({
  type: C.RATE_COLOR,
  id,
  rating,
});
