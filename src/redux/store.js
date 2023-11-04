import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import cartReducer from './cartReducer';
import productReducer from './productreducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
