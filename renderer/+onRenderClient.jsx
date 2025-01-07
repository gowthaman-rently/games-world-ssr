import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

export default onRenderClient

async function onRenderClient(pageContext) {
  const { Page } = pageContext
  hydrateRoot(
    document.getElementById('react-root'),
    <BrowserRouter>
      <Page {...pageContext.pageProps} />
    </BrowserRouter>
  )
}