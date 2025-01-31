import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom';
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import { collectSSRData } from './useSSR/utils';

export async function render(_url) {
  const store = configureStore(); // Create a new Redux store on each request

  const app = (
    <Provider store={store}>
      <StaticRouter location={_url} context={{}}>
        <App />
      </StaticRouter>
    </Provider>
  );

  await collectSSRData(app);

  const html = renderToString(app);

  const initialState = store.getState(); // Get initial Redux state
  return { html, initialState };
}
