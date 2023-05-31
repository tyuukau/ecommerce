import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  // Link,
  useNavigate,
  // useLocation
} from "react-router-dom";

import { Form, Button, Row, Col, Table } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";
// import FormContainer from "../components/FormContainer";

import { getUserProfile, updateUserProfile } from "../actions/userActions";
import { listMyOrders } from "../actions/orderActions";

import { USER_PROFILE_UPDATE_RESET } from "../constants/userConstants";

function ProfileScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userProfile);

  const {
    loading,
    // error,
    userProfile,
  } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userProfileUpdate = useSelector((state) => state.userProfileUpdate);
  const { success } = userProfileUpdate;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!userProfile || !userProfile.name || success) {
        dispatch({ type: USER_PROFILE_UPDATE_RESET });
        dispatch(getUserProfile("profile"));
        dispatch(listMyOrders());
      } else {
        setName(userProfile.name);
        setEmail(userProfile.email);
      }
    }
  }, [dispatch, navigate, userInfo, userProfile, success]);

  /**
   * This function prevents the default form submission behavior and dispatches a login action with the
   * email and password as parameters.
   * @param e - The "e" parameter is an event object that is passed to the function when the form is
   * submitted. It is used to prevent the default behavior of the form submission, which would cause
   * the page to reload.
   */
  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("ERROR");
      setMessage("Passwords do not match");
    } else {
      // console.log("Updating...");
      dispatch(
        updateUserProfile({
          id: userDetails._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("");
    }
  };

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {loading && <Loader />}

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              //   required
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId="passwordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              //   required
              type="password"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>

      <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant="danger">{errorOrders}</Message>
        ) : (
          <Table striped responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Date</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Delivered</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className="fas fa-times" style={{ color: "red" }}></i>
                    )}
                  </td>
                  <td>
                    <LinkContainer to={`/order/${order._id}`}>
                      <Button className="btn-sm">Details</Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
}

export default ProfileScreen;
