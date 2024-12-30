import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/store';
import { Provider } from 'react-redux';

function ReactApp() {
  const preloadedState = window.__PRELOADED_STATE__; // Injected by server
  const store = configureStore(preloadedState);
  delete window.__PRELOADED_STATE__; // Clean up
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.hydrate(<ReactApp />, document.getElementById('root'));
