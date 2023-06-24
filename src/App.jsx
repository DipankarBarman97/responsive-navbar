import { useState } from "react";
import "./App.css";

function App() {
  const [buttonIcon, setButtonIcon] = useState(false);

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <h2>Dipankar</h2>
        </a>
        <ul className={buttonIcon ? "nav-list mobile-list" : "nav-list"}>
          <li>
            <a href="/" onClick={() => setButtonIcon(!buttonIcon)}>
              Home
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setButtonIcon(!buttonIcon)}>
              Service
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setButtonIcon(!buttonIcon)}>
              About
            </a>
          </li>
          <li>
            <a href="/" onClick={() => setButtonIcon(!buttonIcon)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-btn" onClick={() => setButtonIcon(!buttonIcon)}>
          <div className="nav-icon" name="on-btn">
            &#9776;
          </div>
        </div>
      </header>
      <div className="home">
        <h1>Home</h1>
      </div>
    </>
  );
}

export default App;
