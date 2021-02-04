import React, { useState } from "react";

/*
First Name of owner - string
Last Name of owner - string
Address -  string
Br - integer, amount
Ba - integer, amount
Sqft - integer
price - string
*/

export default function ADU() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);
  const [sqft, setSqft] = useState(0);
  const [price, setPrice] = useState("");

  return <div>MyComponent</div>;
}
