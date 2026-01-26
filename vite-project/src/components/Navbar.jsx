import React from 'react'
import { NavLink } from 'react-router-dom';
import "../../src/App.css"
const Navbar = () => {
  return (
    <div className="header">
      <h1>Logo</h1>
      <div className="items">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About us</NavLink>
        <NavLink to={"/courses"}>Courses</NavLink>
        <NavLink to={"/store"}>Store</NavLink>
        <NavLink to={"/useState"}>UseState</NavLink>
        <NavLink to={"/image"}>Image State</NavLink>
        <NavLink to={"/password"}>Password State</NavLink>
        <NavLink to={"/useeffect"}>Use Effect</NavLink>
      </div>
    </div>
  )
}

export default Navbar;
