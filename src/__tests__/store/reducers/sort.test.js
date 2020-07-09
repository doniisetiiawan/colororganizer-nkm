import deepFreeze from 'deep-freeze';
import C from '../../../constants';
import { sort } from '../../../store/reducers';

describe('sort Reducer', () => {
  it('SORT_COLORS success', () => {
    const state = {};
    const action = {
      type: C.SORT_COLORS,
      sortBy: 'SORTED_BY_RATING',
    };
    deepFreeze(state);
    deepFreeze(action);
    expect(sort(state, action)).toEqual('SORTED_BY_RATING');
  });

  it('defaults to SORTED_BY_DATE', () => {
    const state = 'SORTED_BY_DATE';
    const action = {};
    expect(sort(state, action)).toEqual('SORTED_BY_DATE');
  });
});
