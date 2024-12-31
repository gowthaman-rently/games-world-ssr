import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

export function render(_url) {
  const store = configureStore(); // Create a new Redux store on each request

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={_url}>
        <App />
      </StaticRouter>
    </Provider>
  );

  const initialState = store.getState(); // Get initial Redux state
  return { html, initialState };
}
