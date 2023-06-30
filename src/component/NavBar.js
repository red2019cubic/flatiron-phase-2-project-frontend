import React from "react";
import { Link } from "react-router-dom";

import AddPlayerStat from "./AddPlayerStat";

function NavBar() {
  return (
    <div className="App">
      <nav className="navbar navbar-light" width="200%">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Link to="/about" className="navbar-brand">
          About
        </Link>
        <Link
          to="/addplayerstat"
          className="navbar-brand"
          onClick={() => <AddPlayerStat />}
        >
          Add Player Statistics
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
