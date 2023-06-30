import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react"

function NavBar() {
    const[search, setSearch] = useState('');
  return (
    <div className="App">
      <nav className="navbar navbar-light" width="200%">
        <Link to="/"className="navbar-brand">Home</Link>
        <Link to="/about" className="navbar-brand">About</Link>
        <Link to="/addplayer" className="navbar-brand">Add Player</Link>
  
      </nav>
    </div>
  );
}

export default NavBar;
