import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import CustomeLoader from "../Component/CustomeLoader";
import Review from "../Component/Review";
// import products from "../products";

function ProductScreen() {
  const { id } = useParams();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    const fetchedProduct = async () => {
      const { data } = await axios.get(`/api/products/${id}`);
      setProduct(data);
    };
    fetchedProduct();
  }, [product, setProduct]);

  // const product = products.find((pro) => pro._id === id);
  return (
    <div>
      <p>product secren</p>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <Row>
        {/* {product.image ? (
          "loading/...."
        ) : ( */}
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
        {/* } */}
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
            <ListGroup.Item>Description: ${product.description}</ListGroup.Item>
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
    </div>
  );
}

export default ProductScreen;
