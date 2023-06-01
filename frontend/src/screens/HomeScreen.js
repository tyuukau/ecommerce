import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";

import Loader from "../components/Loader";
import Message from "../components/Message";
import Product from "../components/Product";

import { listProducts } from "../actions/productActions";

import { useLocation } from "react-router-dom";

function HomeScreen() {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const location = useLocation();
  let keyword = location.search;

  useEffect(() => {
    console.log(keyword);
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      <h1>Latest Products</h1>

      {error && (
        <Message variant="danger">
          {" "}
          {error.status}: {error.statusText}{" "}
        </Message>
      )}
      {loading && <Loader />}

      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* <h3>{product.name}</h3> */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
