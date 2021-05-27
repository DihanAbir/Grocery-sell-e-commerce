import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Review from "./Review";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          style={{ height: "200px", objectFit: "cover" }}
          src={product.image}
          variant="top"
        />
        <p>{product.name}</p>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <Review
            color="GoldenRod"
            title={product.numReviews}
            value={product.rating}
          />
        </Card.Text>

        <Card.Text as="h3">{product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
