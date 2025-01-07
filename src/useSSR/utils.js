import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { SSRProvider } from './SSRContext';

const collectSSRData = async (App) => {
  const ssrCallbacks = [];

  // Wrapper function to register callbacks
  const registerCallback = (callback) => {
    if (typeof callback === 'function') {
      ssrCallbacks.push(callback);
    }
  };

  // Render the app tree once to collect SSR data
  ReactDOMServer.renderToStaticMarkup(
    <SSRProvider registerCallback={registerCallback}>
      {App}
    </SSRProvider>
  );

  // Execute all collected SSR callbacks
  for (const callback of ssrCallbacks) {
    await callback();
  }
};

export { collectSSRData };
