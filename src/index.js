import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { makeStore } from 'store';
import SFAPICallContainer from 'containers/SFAPICallContainer';
import './theme/index.scss';

const store = makeStore();

ReactDOM.render(
  <Provider store={store}>
    <SFAPICallContainer />
  </Provider>,
  document.getElementById('root'),
);
