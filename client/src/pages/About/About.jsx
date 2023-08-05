import React from 'react'
import MainLayout from '../../Layout/MainLayout'
import './About.scss'
import { Link } from 'react-router-dom'

export default function About({currentColorForImg}) {

  const clicklHanler = (path) => {
    console.log(path);
    if (path === 'main') {
        document.querySelector('#main').scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'about') {
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'price') {
        document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
    } else if (path === 'contacts') {
        document.querySelector('#contacts').scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  return (
      <div className="About">
        <div className="About-Header">
          <h2 className='About-Title'>О нас</h2>
        </div>
        <div style={{background:`rgb${currentColorForImg}, 0.82)`}} className="About-Content">
          <div className="About-Content-Inform">
            <p className="About-Content-Inform-H2" style={{textAlign:'center'}}>Наша команда 365events организована в 2022 году</p>
            <p className="About-Content-Inform-H2">Мы молодая и активная команда профессионалов своего дела!</p>
            <p className="About-Content-Inform-H2">Наша команда состоит из опытных организаторов, 
              которые готовы превратить вашу идею праздника в реальность. 
              Мы предлагаем индивидуальный подход к каждому клиенту, 
              чтобы создать мероприятие, которое отвечает всем требованиям и пожеланиям. 
              У нас есть уникальные и оригинальные идеи для каждого случая, 
              чтобы сделать ваш праздник незабываемым.</p>
            
          </div>
          <div className='Rotate_Animation'>
            <img src="./logo512.png" style={{width:'35%'}} alt="" />
          </div>
          {/* <div className="About-Content-OtherInfo">
            <div className="About-Content-OtherInfo-Contacts">
              <h3 className="About-Content-OtherInfo-H3">Наши контакты</h3>
              <h3 className="About-Content-OtherInfo-H3">Адресс:</h3>
              <h3 className="About-Content-OtherInfo-H3">Телефон</h3>
              <h3 className="About-Content-OtherInfo-H3">email:</h3>
              <h3 className="About-Content-OtherInfo-H3">Группа в контакте:</h3>
            </div>
            <div className="About-Content-OtherInfo-Team">
              <h3 className="About-Content-OtherInfo-H3">Наша команда</h3>
              <p onClick={() => {clicklHanler('main')}} style={{width:'20', height: '0', marginTop:'.5em'}}>Артисты</p>
              <p onClick={() => {clicklHanler('main')}} style={{width:'20', height: '0', marginTop:'2em'}}>Иллюзионисты</p>
              <p onClick={() => {clicklHanler('main')}} style={{width:'20', height: '0', marginTop:'2em'}}>Мастер классы</p>
              <p onClick={() => {clicklHanler('main')}} style={{width:'20', height: '0', marginTop:'2em'}}>Медиа</p>
              <p onClick={() => {clicklHanler('main')}} style={{width:'20', height: '0', marginTop:'2em'}}>Администрация</p>
            </div>
          </div> */}
        </div>
      </div>
  )
}
