import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';

function ReactApp() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<ReactApp />, document.getElementById('root'));
