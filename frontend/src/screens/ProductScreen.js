import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import axios from "axios";

import { Link, useParams, useNavigate } from "react-router-dom";
import { Row, Col, Button, Image, ListGroup, Card, Form } from "react-bootstrap";
import Rating from "../components/Rating";

// import Product from "../components/Product";
import { listProductDetails } from "../actions/productActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

function ProductScreen() {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { error, loading, product } = productDetails;

  let { id } = useParams();
  const navigate = useNavigate();
  // const product = products.find((product) => product._id === id);
  // const [product, setProduct] = useState([]);

  useEffect(() => {
    // console.log("Use Effect triggered.");
    // async function fetchProduct() {
    //   const { data } = await axios.get(`/api/products/${id}`);
    //   setProduct(data);
    // }
    // fetchProduct();
    dispatch(listProductDetails(id));
  }, [id, dispatch]);

  const addToCartHandler = () => {
    // console.log('Add to cart:', id)
    navigate(`/cart/${id}?qty=${qty}`)
  }

  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error.status}: {error.statusText} </Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                  color={"#f8e825"}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {product.description}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      <strong>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty
                      </Col>
                      <Col xs='auto' className='my-1'>
                      <Form.Control 
                      as="select"
                      value ={qty}
                      onChange={(e) => setQty(e.target.value)}>
                        {
                          [...Array(product.countInStock).keys()].map((x) => 
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>)
                        }
                      </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <ListGroup.Item>
                  <Button
                    onClick={addToCartHandler}
                    className="button-block"
                    disabled={product.countInStock === 0}
                    type="button"
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default ProductScreen;
