import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import './About.scss'
import { Link } from 'react-router-dom'

export default function About({currentColorForImg}) {
  
  return (
      <div className="About">
        <div className="About-Header">
          <h1 className='About-Title'>О нас</h1>
        </div>
        <div style={{background:`rgb${currentColorForImg}, 0.82)`}} className="About-Content">
          <div className="About-Content-Inform">
            <h2 className="About-Content-Inform-H2" style={{textAlign:'center'}}>Наша команда 365events организована в 2022 году</h2>
            <h2 className="About-Content-Inform-H2">Мы молодая и активная команда профессионалов своего дела!</h2>
            <h2 className="About-Content-Inform-H2">Наша команда состоит из опытных организаторов, 
              которые готовы превратить вашу идею праздника в реальность. 
              Мы предлагаем индивидуальный подход к каждому клиенту, 
              чтобы создать мероприятие, которое отвечает всем требованиям и пожеланиям. 
              У нас есть уникальные и оригинальные идеи для каждого случая, 
              чтобы сделать ваш праздник незабываемым.</h2>
            
          </div>
          <div className="About-Content-OtherInfo">
            <div className="About-Content-OtherInfo-Contacts">
              <h3 className="About-Content-OtherInfo-H3">Наши контакты</h3>
              <h3 className="About-Content-OtherInfo-H3">Адресс:</h3>
              <h3 className="About-Content-OtherInfo-H3">Телефон</h3>
              <h3 className="About-Content-OtherInfo-H3">email:</h3>
              <h3 className="About-Content-OtherInfo-H3">Группа в контакте:</h3>
            </div>
            <div className="About-Content-OtherInfo-Team">
              <h3 className="About-Content-OtherInfo-H3">Наша команда</h3>
              <Link to={'/animators'} style={{width:'0', position:'relative', left:'-10%', marginTop:'1em'}}>Актёры</Link>
              <Link to={'/animators'} style={{width:'0', position:'relative', left:'-10%', marginTop:'1em'}}>Иллюзионисты</Link>
              <Link to={'/animators'} style={{width:'0', position:'relative', left:'-10%', marginTop:'1em'}}>Мастер классы</Link>
              <Link to={'/animators'} style={{width:'0', position:'relative', left:'-10%', marginTop:'1em'}}>Медиа</Link>
              <Link to={'/administration'} style={{width:'0', position:'relative', left:'-10%', marginTop:'1em'}}>Администрация</Link>
            </div>
          </div>
        </div>
      </div>
  )
}
