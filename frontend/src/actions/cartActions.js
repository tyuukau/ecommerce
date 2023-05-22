import axios from "axios";

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

/**
 * This function adds a product to the cart and saves the cart items to local storage.
 * @param id - The ID of the product being added to the cart.
 * @param qty - qty stands for quantity, which is the number of items the user wants to add to their
 * cart.
 */
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}/`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

/**
 * This function removes an item from the cart and updates the cart items in local storage.
 * @param id - The `id` parameter is the unique identifier of the item that needs to be removed from
 * the cart. It is used to identify the item in the `cartItems` array and remove it from the state.
 */
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
