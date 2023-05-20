import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate, useLocation } from "react-router-dom";

import { Form, Button, Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";
import FormContainer from "../components/FormContainer";

import { login } from "../actions/userActions";

function LoginScreen() {
  /* `const [email, setEmail] = useState("");` and `const [password, setPassword] = useState("");` are
  using the `useState` hook to declare two state variables `email` and `password` and their
  corresponding setter functions `setEmail` and `setPassword`. The initial value of both state
  variables is an empty string `""`. These state variables are used to store the values of the email
  and password input fields in the login form. Whenever the user types something in the input
  fields, the corresponding setter function is called to update the state variable with the new
  value. */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  /**
   * This function prevents the default form submission behavior and dispatches a login action with the
   * email and password as parameters.
   * @param e - The "e" parameter is an event object that is passed to the function when the form is
   * submitted. It is used to prevent the default behavior of the form submission, which would cause
   * the page to reload.
   */
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>

      <h1>Sign In</h1>

      {error && (
        <Message variant="danger">
          {" "}
          {error.status}: {error.statusText}{" "}
        </Message>
      )}
      {loading && <Loader />}

      <Form onSubmit={submitHandler}>

        <Form.Group controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Sign In
        </Button>

      </Form>

      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>

    </FormContainer>
  );
}

export default LoginScreen;
