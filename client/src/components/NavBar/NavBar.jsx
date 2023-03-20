import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <Link to={"/price"}>Услуги</Link>
      <Link to={"/team"}>Команда</Link>
      <Link to={"/contacts"}>Контакты</Link>
    </div>
  )
}
