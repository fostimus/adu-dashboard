import "./App.css";
import ADU from "./components/ADU";
import ADUForm from "./components/ADUForm";
import { useState } from "react";
import { CardDeck, Button, Form } from "react-bootstrap";
import _ from "lodash";

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
- add ADUContainer - used CardDeck from bootstrap instead
- get data from API
- change state on ADU to unit, instead of each field - decided against
- divs on each label/input - not needed
- use css framework - added bootstrap
- use useEffect - added
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
  const [editADUForm, setEditADUForm] = useState(false);
  const [editId, setEditId] = useState(0);
  const [nextId, setNextId] = useState(mockData.length + 1);

  const [filterField, setFilterField] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const editADU = id => {
    setEditADUForm(!editADUForm);
    setEditId(id);
  };

  const submitEdit = (e, unit) => {
    e.preventDefault();
    unit.id = editId;
    const updatedData = data.filter(unit => unit.id !== editId).concat(unit);
    setData(updatedData);
    setEditADUForm(false);
  };

  const removeADU = id => {
    const newArray = data.filter(unit => unit.id !== id);

    setData(newArray);
  };

  const addADU = (e, unit) => {
    e.preventDefault();
    unit.id = nextId;
    data.push(unit);
    setData(data);
    setNextId(nextId + 1);
    setAddADUForm(false);
  };

  const filter = e => {
    setFilterValue(e.target.value);
    console.log(
      data.filter(unit => String(unit[filterField]).startsWith(e.target.value))
    );
  };

  return (
    <div className="App">
      <h1>ADU Dashboard</h1>

      <CardDeck className="cardDeck">
        {data.map(unit => (
          <ADU
            key={unit.id}
            unit={unit}
            removeADU={removeADU}
            editADU={editADU}
          />
        ))}
      </CardDeck>

      <div className="controls">
        <form action="">
          <input
            type="text"
            placeholder="Filter..."
            onChange={e => filter(e)}
            value={filterValue}
          />
          <select
            name="filterValues"
            id="filterValues"
            onChange={e => {
              setFilterValue("");
              setFilterField(e.target.value);
            }}
          >
            {Object.keys(data[0]).map(field =>
              field !== "id" ? (
                <option value={field} key={field}>
                  {formatField(field)}
                </option>
              ) : (
                <></>
              )
            )}
          </select>
        </form>
        <Button variant="success" onClick={() => setAddADUForm(!addADUForm)}>
          Add New ADU
        </Button>
      </div>

      {addADUForm ? <ADUForm onSubmit={addADU} /> : <></>}
      {editADUForm ? (
        <ADUForm
          unit={data.filter(unit => unit.id === editId)[0]}
          onSubmit={submitEdit}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;

//TODO: find a way to make this agnostic to length. will just work on ANY field
// currently: only of the form fieldForm or just field
function formatField(field) {
  let regex = /^([a-z]+)([A-Z][a-z]+)?$/;

  const groups = field.match(regex);

  console.log(groups);

  // groups[0] is the overall match
  // groups[1, 2] are the capture groups
  if (groups[2] === undefined) {
    return uppercaseString(groups[1]);
  } else {
    return uppercaseString(groups[1]) + " " + uppercaseString(groups[2]);
  }
}

function uppercaseString(str) {
  return str[0].toUpperCase() + str.slice(1);
}
