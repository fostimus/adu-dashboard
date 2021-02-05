import React, { useState, useEffect } from "react";

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
  const [firstName, setFirstName] = useState(unit.firstName);
  const [lastName, setLastName] = useState(unit.lastName);
  const [address, setAddress] = useState(unit.address);
  const [bedrooms, setBedrooms] = useState(unit.bedrooms);
  const [bathrooms, setBathrooms] = useState(unit.bathrooms);
  const [sqft, setSqft] = useState(unit.sqft);
  const [price, setPrice] = useState(unit.price);

  return (
    <>
      <div>
        <h2>ADU</h2>
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName}</p>
        <p>Address: {address}</p>
        <p># of Bedrooms: {bedrooms}</p>
        <p># of Bathrooms: {bathrooms}</p>
        <p>Square Feet: {sqft}</p>
        <p>Price: {price}</p>
      </div>
      <button onClick={() => editADU(unit.id)}>Edit me</button>
      <button onClick={() => removeADU(unit.id)}>Remove me</button>
    </>
  );
}
