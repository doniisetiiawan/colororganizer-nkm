// eslint-disable-next-line max-len
/* eslint-disable react/prop-types,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions,react/jsx-filename-extension */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Expandable from '../../../components/HOC/Expandable';

configure({ adapter: new Adapter() });

describe('Expandable Higher Order Component', () => {
  let props;
  let wrapper;
  let ComposedComponent;
  const MockComponent = ({ collapsed, expandCollapse }) => (
    <div onClick={expandCollapse}>
      {collapsed ? 'collapsed' : 'expanded'}
    </div>
  );

  describe('Rendering UI', () => {
    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent);
      wrapper = mount(
        <ComposedComponent foo="foo" gnar="gnar" />,
      );
      props = wrapper.find(MockComponent).props();
    });

    it('Starts off Collapsed', () => expect(props.collapsed).toBe(true));

    it('Passes the expandCollapse function to composed component', () => expect(typeof props.expandCollapse).toBe('function'));

    it('passes additional foo prop to composed component', () => expect(props.foo).toBe('foo'));

    it('passes additional gnar prop to composed component', () => expect(props.gnar).toBe('gnar'));
  });

  describe('Expand Collapse Functionality', () => {
    let instance;

    beforeAll(() => {
      ComposedComponent = Expandable(MockComponent);
      wrapper = mount(
        <ComposedComponent collapsed={false} />,
      );
      instance = wrapper.instance();
    });

    it('renders the MockComponent as the root element', () => {
      expect(wrapper.first().is(MockComponent));
    });

    it('starts off expanded', () => {
      expect(instance.state.collapsed).toBe(false);
    });

    it('toggles the collapsed state', () => {
      instance.expandCollapse();
      expect(instance.state.collapsed).toBe(true);
    });
  });
});
