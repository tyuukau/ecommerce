import React from "react";

import { Card } from "react-bootstrap";

import { Link } from "react-router-dom";

import Rating from "./Rating";

/**
 * The function displays a product card with its image, name, rating, number of reviews, and price.
 * @returns The `Product` component is being returned, which renders a Bootstrap `Card` component with
 * the details of a product, including its image, name, rating, and price. The `Rating` component is
 * also used to display the product's rating and number of reviews.
 */
function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-3">
            {/* {product.rating} from {product.numReviews} reviews */}
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
              color={"#f8e825"}
            />
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
