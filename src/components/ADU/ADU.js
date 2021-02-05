import React, { useState, useEffect } from "react";
import { Card, Nav, Button } from "react-bootstrap";
import styles from "./adu.module.css";

/*
First Name of owner - string
Last Name of owner - string
Address -  string
Br - integer, amount
Ba - integer, amount
Sqft - integer
price - string
*/

export default function ADU({ unit, removeADU, editADU }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [sqft, setSqft] = useState(0);
  const [price, setPrice] = useState("");

  const [moreInfo, setMoreInfo] = useState(false);

  useEffect(() => {
    setFirstName(unit.firstName);
    setLastName(unit.lastName);
    setAddress(unit.address);
    setBedrooms(unit.bedrooms);
    setBathrooms(unit.bathrooms);
    setSqft(unit.sqft);
    setPrice(unit.price);
  }, [unit]);

  const cardText = moreInfo ? (
    <>
      <div>Bedrooms: {bedrooms}</div>
      <div>Bathrooms: {bathrooms}</div>
      <div>
        Size: {sqft} ft<sup>2</sup>
      </div>
    </>
  ) : (
    <>
      <div>{address}</div>
      <div>{price}</div>
    </>
  );

  return (
    <Card className={styles.card}>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link href="#first" onClick={() => setMoreInfo(false)}>
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link" onClick={() => setMoreInfo(true)}>
              More Info
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Img
        variant="top"
        src="https://picsum.photos/200/100
        "
      />
      <Card.Body>
        <Card.Title>
          {firstName} {lastName}
        </Card.Title>
        <Card.Text>{cardText}</Card.Text>
      </Card.Body>
      <Card.Footer className={styles.footer}>
        <Button onClick={() => editADU(unit.id)} variant="outline-secondary">
          Edit me
        </Button>
        <Button onClick={() => removeADU(unit.id)} variant="outline-danger">
          Remove me
        </Button>
      </Card.Footer>
    </Card>
  );
}
