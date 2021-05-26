import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../Component/Product";
import products from "../products";

function HomeScreen() {
  return (
    <Container>
      <h1>Welcome to Proshop</h1>
      <p>Latest products</p>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default HomeScreen;
