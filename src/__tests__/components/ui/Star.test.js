/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Star from '../../../components/ui/Star';

configure({ adapter: new Adapter() });

describe('<Star /> UI Component', () => {
  it('renders default star', () => expect(shallow(<Star />).find('div.star').length).toBe(
    1,
  ));

  it('renders selected stars', () => expect(
    shallow(<Star selected />).find('div.selected.star')
      .length,
  ).toBe(1));

  it('click does not cause error', () => {
    shallow(<Star selected />)
      .find('div')
      .simulate('click');
  });

  it('invokes onClick', () => {
    const _click = jest.fn();
    shallow(<Star onClick={_click} />)
      .find('div.star')
      .simulate('click');
    expect(_click).toBeCalled();
  });
});
