import { legacy_createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//Reducers
import { cartReducer } from './reducers/cartReducers';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducers';

const reducer = combineReducers({
  cart:cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer
});

const middleware = [thunk];
//from here 
const cartItemsInLocalStorage = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [];

const INITIAL_STATE = {
  cart:{
    cartItems: cartItemsInLocalStorage,
  },
};
//till here and INITIAL_STATE
const store = legacy_createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;