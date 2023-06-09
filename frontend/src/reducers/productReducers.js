import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

/**
 * This is a reducer function that handles actions related to fetching a list of products, and updates
 * the state accordingly.
 * @param [state] - The current state of the productListReducer. It is initialized with an object that
 * has a property called "products" which is initially an empty array.
 * @param action - The `action` parameter in this code refers to an object that describes the action
 * being performed. It typically has a `type` property that indicates the type of action being
 * performed, and may also have additional data or payload related to the action. The `switch`
 * statement in this code checks the `
 * @returns The `productListReducer` function returns the list of products, which is an empty array by
 * default.
 */
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

/**
 * This is a reducer function that handles actions related to fetching and displaying product details,
 * including loading, success, and failure states.
 * @param [state] - The current state of the product details, which includes the product object and its
 * reviews array.
 * @param action - The `action` parameter in this code refers to an object that contains information
 * about the action being dispatched. It typically has a `type` property that describes the type of
 * action being performed, and may also have additional data or payload that is relevant to the action.
 * The reducer uses this information to determine
 * @returns The `productDetailsReducer` function returns the details of the product.
 */
export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
