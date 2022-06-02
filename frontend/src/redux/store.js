import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';

const reducer = combineReducers({
  cart:cartReducer,
  getProducts: getProductsReducer,
  getProductsDetails: getProductDetailsReducer
});

const middleware = [thunk];

const store = legacy_createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;