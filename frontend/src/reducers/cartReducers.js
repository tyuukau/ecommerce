import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SHIPPING_ADDRESS_SAVE,
} from "../constants/cartConstants";

/**
 * This is a reducer function that manages the state of a shopping cart by adding or removing items
 * based on the action type.
 * @param [state] - The initial state of the cart, which is an object with a property called
 * "cartItems" that is initially an empty array.
 * @param action - The `action` parameter is an object that contains information about the action being
 * dispatched. It typically has a `type` property that describes the type of action being performed,
 * and may also have additional data in a `payload` property.
 * @returns The `cartReducer` function returns a new state object with updated `cartItems` array based
 * on the action type and payload. If the action type is `CART_ADD_ITEM`, it checks if the item already
 * exists in the cartItems array and either updates the existing item or adds a new item to the array.
 * If the action type is `CART_REMOVE_ITEM`, it removes the item from the cart.
 */
export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };

    case CART_SHIPPING_ADDRESS_SAVE:
      return {
        ...state,
        shippingAddress: action.payload,
      }

    default:
      return state;
  }
};
