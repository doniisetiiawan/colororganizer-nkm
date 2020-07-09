/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJSON from 'enzyme-to-json';
import { compose } from 'redux';
import AddColorFor from '../../../components/ui/AddColorForm';

configure({ adapter: new Adapter() });

describe('<AddColorForm /> UI Componnet', () => {
  let wrapper;

  describe('Rendering the UI', () => {
    it('renders correctly', () => {
      compose(
        expect,
        toJSON,
        shallow,
      )(<AddColorFor />).toMatchSnapshot();
    });

    it('Submitting default onNewColor does not cause error', () => {
      wrapper = mount(<AddColorFor />);
      wrapper.find('#_title').instance().value = 'test-color';
      wrapper.find('#_color').instance().value = '#0000FF';
      wrapper.find('form').simulate('submit');
    });
  });

  describe('Adding New Colors', () => {
    const _addColor = jest.fn();

    beforeAll(() => {
      wrapper = mount(
        <AddColorFor onNewColor={_addColor} />,
      );
      wrapper.find('#_title').instance().value = 'test-color';
      wrapper.find('#_color').instance().value = '#000099';
      wrapper.find('form').simulate('submit');
    });

    it('adds colors correctly', () => expect(_addColor).toBeCalledWith(
      'test-color',
      '#000099',
    ));

    it('resets the title value', () => expect(wrapper.find('#_title').instance().value).toBe(
      '',
    ));

    it('resets the color value', () => expect(wrapper.find('#_color').instance().value).toBe(
      '#000000',
    ));
  });
});
