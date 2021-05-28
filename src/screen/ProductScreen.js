import React, { useEffect } from "react";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { detailsProducts } from "../Actions/productActions";

import Review from "../Component/Review";

function ProductScreen() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetail);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProducts(id));
  }, [dispatch, id]);

  // const product = products.find((pro) => pro._id === id);
  return (
    <div>
      <p>product secren</p>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      {loading ? (
        "loading..."
      ) : error ? (
        <h1>error</h1>
      ) : (
        <Row>
          <Col md={6}>
            <Image
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              src={product.image}
              alt={product.name}
            />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Review
                  title={`${product.numReviews} reviews`}
                  value={product.rating}
                ></Review>
              </ListGroup.Item>
              <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
              <ListGroup.Item>
                Description: ${product.description}
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
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                  <button className="btn-block">Add To Cart</button>
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
