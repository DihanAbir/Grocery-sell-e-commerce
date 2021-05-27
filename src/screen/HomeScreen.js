import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

import Product from "../Component/Product";

// import products from "../products";

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchedProduct = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchedProduct();
  }, []);
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
