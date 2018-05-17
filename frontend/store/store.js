import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const middleWares = [logger, thunk];

const configureStore = (preloadedState = {}) => {
  return (
    createStore( rootReducer, preloadedState, applyMiddleware(...middleWares))
  );
};

export default configureStore;
