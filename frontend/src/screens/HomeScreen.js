import React, { useState, useEffect } from "react";
// import axios from "axios";

import { Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

// import products from "../products";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";

function HomeScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("Use Effect triggered.");
    // async function fetchProducts() {
    //   const { data } = await axios.get("/api/products/");
    //   setProducts(data);
    // }
    // fetchProducts();
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2> {error} </h2>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {/* <h3>{product.name}</h3> */}
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
