import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CheckoutSteps from "../Component/CheckoutSteps";
import { saveShippingAddress } from "../Actions/cartAction";

function ShippingScreen({ location, history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [city, setCity] = useState(shippingAddress.city);
  const [address, setAddress] = useState(shippingAddress.address);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ city, address, country, postalCode }));
    history.push("/payment");
  };

  return (
    <div>
      <p> shipping</p>
      <CheckoutSteps step1 step2 />
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <Form.Label>address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>city</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <Form.Label>postalCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default ShippingScreen;
