import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';

import { makeStore } from 'store';
import { AppContainer } from './AppContainer';

const store = makeStore();
describe('AppContainer', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <AppContainer />
      </Provider>);
    expect(wrapper).toBeDefined();
  });

  it('calls sayHello from onSubmitHello', () => {
    const sayHello = jest.fn();
    const wrapper = shallow(<AppContainer sayHello={sayHello} />);
    wrapper.instance().onSubmitHello({ name: 'foo' });
    expect(sayHello.mock.calls.length).toEqual(1);
  });

  it('maps state and dispatch to props', () => {
    const sayHello = jest.fn();
    const wrapper = shallow(<AppContainer sayHello={sayHello} />);
    expect(wrapper.props()).toEqual(expect.objectContaining({
      sayHello: expect.any(Function),
      onSubmitHello: expect.any(Function),
    }));
  });
});
