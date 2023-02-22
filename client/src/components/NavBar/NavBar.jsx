import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/price"}>Price</Link>
      <Link to={"/team"}>Team</Link>
      <Link to={"/contacts"}>Contacts</Link>
    </div>
  )
}
