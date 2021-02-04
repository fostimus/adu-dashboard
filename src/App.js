import logo from "./logo.svg";
import "./App.css";

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
price - string

Keep an eye on the styling !
Create a git rep and push it !
Share the git rep link !
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
