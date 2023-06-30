import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react"

function NavBar() {
    const[search, setSearch] = useState('');
  return (
    <div className="App">
      <nav className="navbar navbar-light" width="100%">
        <Link to="/"className="navbar-brand">Home</Link>
        <Link to="/about" className="navbar-brand">About</Link>
        <Link to="/addplayer" className="navbar-brand">Add Player</Link>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search Player"
            aria-label="Search"
            onChange={e=> setSearch(e.target.value)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}

export default NavBar;
