import React from 'react';
import { Switch, Route, Link, NavLink } from "react-router-dom";



export default function NavBar() {
  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeStyle={{fontWeight: "bold", color: "red"}} exact={true}>Home</NavLink>
          </li>
          <li>
            <NavLink exact to="/about" activeStyle={{fontWeight: "bold", color: "red"}} exact={true}>About</NavLink>
          </li>
          <li>
            <NavLink exact to="/discover" activeStyle={{fontWeight: "bold", color: "red", listStyle: "none"}} exact={true}>Discover</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}