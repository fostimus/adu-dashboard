import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ADUForm({ onSubmit }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [sqft, setSqft] = useState(0);
  const [price, setPrice] = useState("");

  const unit = {
    firstName,
    lastName,
    address,
    bedrooms,
    bathrooms,
    sqft,
    price
  };

  return (
    <Form>
      <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First name"
          onChange={e => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last name"
          onChange={e => setLastName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address"
          onChange={e => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicBedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control
          type="number"
          placeholder="# of bedrooms"
          onChange={e => setBedrooms(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicBathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control
          type="number"
          placeholder="# of bathrooms"
          onChange={e => setBathrooms(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicSqFt">
        <Form.Label>Square Footage</Form.Label>
        <Form.Control
          type="number"
          placeholder="sqft"
          onChange={e => setSqft(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Price"
          onChange={e => setPrice(e.target.value)}
        />
      </Form.Group>
      <Button onClick={e => onSubmit(e, unit)} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
