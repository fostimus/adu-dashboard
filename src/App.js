import "./App.css";
import ADU from "./components/ADU";
import ADUForm from "./components/ADUForm";
import { useState } from "react";
import { CardDeck, Button, Form } from "react-bootstrap";

/**
 * List of ADU’s as react app

Display List
Add ADU
Remove ADU
Edit ADU

All in one page if you want

ADU object is :

First Name of owner - string
Last Name of owner - string
Address -  string
Br - integer
Ba - integer
Sqft - integer
price - string, not on form to add

Keep an eye on the styling !
Create a git rep and push it !
Share the git rep link !
*/

/*
differently:
- add ADUContainer
- get data from API
- change state on ADU to unit, instead of each field
- divs on each label/input
- use css framework
*/

const mockData = [
  {
    id: 1,
    firstName: "Owner",
    lastName: "McOwner",
    address: "1212 11th st., Los Angeles, CA, 90505",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 20,
    price: "$12,300"
  },
  {
    id: 2,
    firstName: "Second",
    lastName: "Owner",
    address: "12 100th st., Los Angeles, CA, 90505",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 2000,
    price: "$120,300"
  }
];

function App() {
  const [data, setData] = useState(mockData);
  const [addADUForm, setAddADUForm] = useState(false);

  const editADU = id => {
    // edit from mockData array
  };

  const removeADU = id => {
    const newArray = mockData.filter(unit => unit.id !== id);
    setData(newArray);
  };

  const addADU = event => {
    event.preventDefault();
    const newArray = data;
    // newArray.push();
    // console.log(newArray);
    setData(newArray);
  };

  const addForm = addADUForm ? (
    <form action="" className="form">
      <label htmlFor="firstName">First Name</label>
      <input
        onChange={event => setNewFirstName(event.target.value)}
        name="firstName"
        type="text"
      />

      <label htmlFor="LastName">Last Name</label>
      <input
        onChange={event => setNewLastName(event.target.value)}
        name="lastName"
        type="text"
      />

      <label htmlFor="address">Address</label>
      <input name="address" type="text" />

      <label htmlFor="bedrooms">Number of Bedrooms</label>
      <input name="bedrooms" type="text" />

      <label htmlFor="bathrooms">Number of bathrooms</label>
      <input name="bathrooms" type="text" />

      <label htmlFor="squarefeet">Square Feet</label>
      <input name="squarefeet" type="text" />

      <button onClick={addADU}>Add ADU</button>
    </form>
  ) : (
    <></>
  );

  return (
    <div className="App">
      <h1>ADU Dashboard</h1>

      <CardDeck>
        {data.map(unit => (
          <ADU unit={unit} removeADU={removeADU} editADU={editADU} />
        ))}
      </CardDeck>

      <div className="controls">
        <Button variant="success" onClick={() => setAddADUForm(!addADUForm)}>
          Add New ADU
        </Button>
      </div>

      <ADUForm />
    </div>
  );
}

export default App;
