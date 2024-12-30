import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import App from '../src/App';

import configureStore from '../src/redux/store';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getGamesList } from '../src/redux/action';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 3000;
const server = express();

server.use(
  express.static('build', {
    index: false, // Prevent serving index.html automatically
  })
);


server.get('*', async (req, res) => {
  const store = configureStore();
  await store.dispatch(getGamesList());
  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url,
    });
    res.end();
  } else {
    fs.readFile('build/index.html', 'utf8', (err, data) => {
      if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
      }

      const preloadedState = store.getState();

      return res.send(
        data.replace(
          '<div id="root"></div>',
          `<div id="root">${html}</div>
          <script>
        window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
          /</g,
          '\\u003c'
        )}
      </script>`
        )
      );
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
