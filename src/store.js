import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export const middleware = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export const store = createStoreWithMiddleware(rootReducer);