import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

import Message from "../components/Message";

import { addToCart, removeFromCart } from "../actions/cartActions";

function CartScreen() {
  /* `const dispatch = useDispatch();` is a hook provided by the `react-redux` library that allows
  components to dispatch actions to the Redux store. It returns a reference to the `dispatch`
  function from the store, which can be used to dispatch actions to update the state of the
  application. In this specific code, it is used to dispatch the `addToCart` and `removeFromCart`
  actions to update the cart state. */
  const dispatch = useDispatch();

  /* `const cart = useSelector((state) => state.cart)` is using the `useSelector` hook from
  `react-redux` to select the `cart` state from the Redux store. It takes a function as an argument
  that receives the entire Redux state and returns the specific slice of state that the component
  needs. In this case, it returns the `cart` state. */
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  /* `let { id } = useParams();` is using the `useParams` hook from `react-router-dom` to extract the
  `id` parameter from the URL. It is destructuring the `id` parameter from the object returned by
  `useParams()`. This allows the component to access the `id` parameter value from the URL and use
  it to dispatch the `addToCart` action with the correct product ID. */
  let { id } = useParams();

  /* `const navigate = useNavigate();` is using the `useNavigate` hook from `react-router-dom` to get a
  reference to the `navigate` function. This function can be used to programmatically navigate to a
  different route in the application. In this specific code, it is used in the `checkoutHandler`
  function to navigate to the login page with a redirect to the shipping page. */
  const navigate = useNavigate();

  /* `const location = useLocation();` is using the `useLocation` hook from `react-router-dom` to get
  access to the current location object. The location object contains information about the current
  URL, including the pathname, search, and hash. In this specific code, it is used to extract the
  `qty` parameter from the URL search query string and convert it to a number using `Number()`. This
  `qty` value is then used to dispatch the `addToCart` action with the correct quantity for the
  product. */
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  /* `useEffect(() => {...})` is a hook provided by React that allows the component to perform side
  effects, such as fetching data or updating the DOM, after rendering. In this specific code, the
  `useEffect` hook is used to dispatch the `addToCart` action with the correct product ID and
  quantity when the component mounts or when the `id` or `qty` values change. */
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  /**
   * This is a function that dispatches an action to remove an item from the cart.
   * @param id - The `id` parameter is a unique identifier for an item that needs to be removed from
   * the cart. It is passed as an argument to the `removeFromCartHandler` function.
   */
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  };

  /**
   * The function redirects the user to the login page with a redirect parameter set to "shipping".
   */
  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  /**
   * This code involes a `Form.Control` component that displays a dropdown menu
   * with options for selecting the quantity of a product to add to the cart. The
   * `as` prop is set to `"select"` to render a dropdown menu, and the `value` prop
   * is set to the current quantity of the item in the cart. The `onChange` prop is
   * set to a function that dispatches the `addToCart` action with the updated
   * quantity value when the user selects a new quantity from the dropdown menu. The
   * options for the dropdown menu are generated using the `Array` method `keys()`
   * and the `countInStock` value of the item, and each option displays a number from
   * 1 to the `countInStock` value.
   */
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message variant="info">
            Your cart is empty <Link to="/">Go Back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item.product}>
                <Row>

                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>

                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>

                  <Col md={2}>${item.price}</Col>

                  <Col md={3}>

                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>

                  <Col md={1}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>

                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>

      <Col md={4}>
        <Card>
          <ListGroup variant="flush">

            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)} items)
              </h2>
            </ListGroup.Item>

            <ListGroup.Item>
              ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
            </ListGroup.Item>

            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Proceed to Checkout
              </Button>
            </ListGroup.Item>

          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default CartScreen;
