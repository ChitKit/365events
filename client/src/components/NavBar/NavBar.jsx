import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className="NavBar">
      <Link to={"/"}>Главная</Link>
      <Link to={"/price"}>Праздники</Link>
      <Link to={"/team"}>Аниматоры</Link>
      <Link to={"/show_programs"}>Шоу программы</Link>
      <Link to={"/additional_services"}>Дополнительные услуги</Link>
      <Link to={"/about"}>О нас</Link>
      <Link to={"/contacts"}>Контакты</Link>
    </div>
  )
}
