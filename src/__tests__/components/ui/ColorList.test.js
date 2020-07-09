/* eslint-disable react/jsx-filename-extension,jsx-a11y/control-has-associated-label */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { compose } from 'redux';
import deepFreeze from 'deep-freeze';
import ColorList from '../../../components/ui/ColorList';

configure({ adapter: new Adapter() });

jest.mock(
  '../../../components/ui/Color',
  () => ({
    rating,
    onRate = (f) => f,
    onRemove = (f) => f,
  }) => (
    <div className="mockColor">
      <button
        type="button"
        className="rate"
        onClick={() => onRate(rating)}
      />
      <button
        type="button"
        className="remove"
        onClick={onRemove}
      />
    </div>
  ),
);

const _testColors = deepFreeze([
  {
    id: '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
    title: 'lawn',
    color: '#44ef37',
    timestamp: 'Sun Apr 10 2016 12:54:19 GMT-0700 (PDT)',
    rating: 4,
  },
  {
    id: 'f9005b4e-975e-433d-a646-79df172e1dbb',
    title: 'ocean blue',
    color: '#0061ff',
    timestamp: 'Mon Apr 11 2016 12:54:31 GMT-0700 (PDT)',
    rating: 2,
  },
  {
    id: '58d9caee-6ea6-4d7b-9984-65b145031979',
    title: 'tomato',
    color: '#ff4b47',
    timestamp: 'Fri Apr 15 2016 12:54:43 GMT-0700 (PDT)',
    rating: 0,
  },
]);

describe('<ColorList /> UI Component', () => {
  afterAll(() => jest.resetAllMocks());

  describe('Rendering UI', () => {
    it('Renders Correctly', () => compose(
      expect,
      toJSON,
      shallow,
    )(
      <ColorList colors={_testColors} />,
    ).toMatchSnapshot());

    it('Defaults Properties correctly', () => expect(
      shallow(<ColorList />)
        .find('p')
        .text(),
    ).toBe('No Colors Listed. (Add a Color)'));

    it('Clicking default rate button do not cause Error', () => {
      mount(<ColorList colors={_testColors} />)
        .find('button.rate')
        .first()
        .simulate('click');
    });

    it('Clicking default remove button do not cause Error', () => {
      mount(<ColorList colors={_testColors} />)
        .find('button.remove')
        .first()
        .simulate('click');
    });
  });

  describe('Rating a Color', () => {
    const _rate = jest.fn();

    beforeAll(() => mount(
      <ColorList colors={_testColors} onRate={_rate} />,
    )
      .find('button.rate')
      .first()
      .simulate('click'));

    it('invokes onRate Handler', () => expect(_rate).toBeCalled());

    it('rates the correct color', () => expect(_rate).toBeCalledWith(
      '8658c1d0-9eda-4a90-95e1-8001e8eb6036',
      4,
    ));
  });

  describe('Removing a Color', () => {
    const _remove = jest.fn();

    beforeAll(() => mount(
      <ColorList
        colors={_testColors}
        onRemove={_remove}
      />,
    )
      .find('button.remove')
      .last()
      .simulate('click'));

    it('invokes onRemove Handler', () => expect(_remove).toBeCalled());

    it('removes the correct color', () => expect(_remove).toBeCalledWith(
      '58d9caee-6ea6-4d7b-9984-65b145031979',
    ));
  });
});
