import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import thunk from 'redux-thunk';

const middleWares = [thunk];

const configureStore = (preloadedState = {}) => {
  return (
    createStore( rootReducer, preloadedState, applyMiddleware(...middleWares))
  );
};
