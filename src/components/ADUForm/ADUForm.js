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

  return (
    <Form>
      <Form.Group controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="First name" />
      </Form.Group>
      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last name" />
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>

      <Form.Group controlId="formBasicBedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control type="number" placeholder="# of bedrooms" />
      </Form.Group>

      <Form.Group controlId="formBasicBathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control type="number" placeholder="# of bathrooms" />
      </Form.Group>

      <Form.Group controlId="formBasicSqFt">
        <Form.Label>Square Footage</Form.Label>
        <Form.Control type="number" placeholder="sqft" />
      </Form.Group>

      <Form.Group controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Price" />
      </Form.Group>
      <Button onClick={onSubmit} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
