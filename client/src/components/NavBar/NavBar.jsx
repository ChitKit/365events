import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/price"}>Price</Link>
      <Link to={"/team"}>Team</Link>
      <Link to={"/contacts"}>Contacts</Link>
    </div>
  )
}
