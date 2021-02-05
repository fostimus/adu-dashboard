import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function ADUForm({ unit, onSubmit }) {
  const [firstName, setFirstName] = useState(unit ? unit.firstName : "");
  const [lastName, setLastName] = useState(unit ? unit.lastName : "");
  const [address, setAddress] = useState(unit ? unit.address : "");
  const [bedrooms, setBedrooms] = useState(unit ? unit.bedrooms : 0);
  const [bathrooms, setBathrooms] = useState(unit ? unit.bathrooms : 0);
  const [sqft, setSqft] = useState(unit ? unit.sqft : 0);
  const [price, setPrice] = useState(unit ? unit.price : "");

  const newUnit = {
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
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicBedrooms">
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control
          type="number"
          placeholder="# of bedrooms"
          value={bedrooms}
          onChange={e => setBedrooms(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicBathrooms">
        <Form.Label>Bathrooms</Form.Label>
        <Form.Control
          type="number"
          placeholder="# of bathrooms"
          value={bathrooms}
          onChange={e => setBathrooms(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicSqFt">
        <Form.Label>Square Footage</Form.Label>
        <Form.Control
          type="number"
          placeholder="sqft"
          value={sqft}
          onChange={e => setSqft(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          placeholder="Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </Form.Group>
      <Button
        onClick={e => onSubmit(e, newUnit)}
        variant="primary"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
}
