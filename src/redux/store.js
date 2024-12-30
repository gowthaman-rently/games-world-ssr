import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { gamesList } from './reducer';

import thunk from 'redux-thunk';


const configureStore = (preloadedState = {}) => {
  const reducer = combineReducers({
    gamesList,
  });

  const middleware = [thunk];

  const composeEnhancers =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  return createStore(reducer, preloadedState, enhancer);
};

export default configureStore;

