import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { escapeInject, dangerouslySkipEscape } from 'vike/server';

export default onRenderHtml;

async function onRenderHtml(pageContext) {
  const { Page, pageProps, urlPathname } = pageContext;
  const pageHtml = ReactDOMServer.renderToString(
    <>
      <StaticRouter location={urlPathname}>
        <Page {...pageProps} />
      </StaticRouter>
    </>
  );
  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
