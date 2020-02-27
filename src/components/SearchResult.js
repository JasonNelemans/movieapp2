import React from 'react';
import { Switch, Route, Link, NavLink } from "react-router-dom";


export default function SearchResult(props) {
  return (
    <li> 
      <img src={props.src} alt="movie poster" />
      <p className="title"><strong>{props.title}</strong> ({props.imdb})</p>
      <p>Year of release: <strong>{props.year}</strong></p>
      <NavLink exact to={`/movie/${props.imdb}`}>Click here for more</NavLink>
    </li>
  )
}