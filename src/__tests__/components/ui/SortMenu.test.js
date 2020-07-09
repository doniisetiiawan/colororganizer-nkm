/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { compose } from 'redux';
import SortMenu from '../../../components/ui/SortMenu';

configure({ adapter: new Adapter() });

describe('<Color /> UI Component', () => {
  it('Renders Correctly', () => compose(
    expect,
    toJSON,
    shallow,
  )(
    <SortMenu sort="SORTED_BY_TITLE" />,
  ).toMatchSnapshot());

  it('click does not cause error', () => {
    mount(<SortMenu sort="SORTED_BY_TITLE" />)
      .children()
      .childAt(2)
      .simulate('click');
  });

  it('onSelect returns correct option', () => {
    const _select = jest.fn();
    const wrapper = mount(<SortMenu onSelect={_select} />);
    wrapper.children().childAt(3).simulate('click');
    expect(_select.mock.calls[0][0]).toBe(
      'rating',
    );
  });
});
