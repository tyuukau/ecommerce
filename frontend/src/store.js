/* `import { configureStore } from '@reduxjs/toolkit'` is importing the `configureStore` function from
the `@reduxjs/toolkit` package. This function is used to create a Redux store with preconfigured
options such as automatically combining slice reducers, adding middleware, and enabling the Redux
DevTools Extension. */
import { configureStore } from "@reduxjs/toolkit";

/* `import logger from 'redux-logger'` is importing the `redux-logger` middleware, which logs actions
and state changes in the console for debugging purposes. It is then added to the middleware array in
the `configureStore` function to be used in the Redux store. */
import logger from "redux-logger";

/* These lines of code are importing the reducer functions from separate files located in the
`./reducers` directory. Specifically, `productListReducer` and `productDetailsReducer` are imported
from `productReducers.js`, `cartReducer` is imported from `cartReducers.js`, and `userLoginReducer`
is imported from `userReducers.js`. These reducer functions are then combined into a single
`reducer` object that is passed to the `configureStore` function to create the Redux store. */
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
} from "./reducers/orderReducers";
import {
  productListReducer,
  productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userLoginReducer,
  userRegisterReducer,
  userProfileReducer,
  userProfileUpdateReducer,
} from "./reducers/userReducers";

/* `const reducer` is an object that combines all the individual reducer functions from separate files
into a single object. Each reducer function is assigned to a key in the `reducer` object, with the
key name indicating the slice of state that the reducer function will manage. For example,
`productListReducer` is assigned to the `productList` key, indicating that it will manage the
`productList` slice of state in the Redux store. This `reducer` object is then passed to the
`configureStore` function to create the Redux store. */
const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userProfile: userProfileReducer,
  userProfileUpdate: userProfileUpdateReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
};

/* These lines of code are retrieving data from the browser's local storage and parsing it into
the preloadedState object. */
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

/* `const preloadedState` is an object that contains the initial state of the Redux store. It is used
to hydrate the store with data that was previously saved in the browser's local storage. */
const preloadedState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};

// const debounceNotify = _.debounce((notify) => notify())

/* This code is creating a Redux store using the `configureStore` function from the `@reduxjs/toolkit`
package. The `reducer` object is passed as an argument to the `configureStore` function to combine
all the individual reducer functions into a single reducer function. The `middleware` option is used
to add the `redux-logger` middleware to the store, which logs actions and state changes in the
console for debugging purposes. The `devTools` option is used to enable the Redux DevTools Extension
in development mode. The `preloadedState` option is used to hydrate the store with data that was
previously saved in the browser's local storage. Finally, the `configureStore` function returns the
created Redux store, which is assigned to the `store` constant. */
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
  preloadedState,
  //   enhancers: [batchedSubscribe(debounceNotify)],
});

export default store;
