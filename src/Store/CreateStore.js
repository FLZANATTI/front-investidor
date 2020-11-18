import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise'
import reducer from '../reducer';


const createStoreWithMiddleware = applyMiddleware(
  promise,
  thunk,
)(createStore);


const store = createStoreWithMiddleware(reducer);

export { store };
