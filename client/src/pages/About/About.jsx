import React from "react";
import "./About.scss";
import { useState } from "react";

export default function About({ currentColorForImg }) {
    const clicklHanler = (path) => {
        console.log(path);
        if (path === "team") {
            document
                .querySelector("#team")
                .scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="About">
            <div className="About-Header">
                <h2 className="About-Title">Познакомимся?</h2>
            </div>
            <div
                style={{ background: `rgb${currentColorForImg}, 0.82)` }}
                className="About-Content"
            >
                <div className="About-Content-Inform">
                    <p
                        className="About-Content-Inform-H2"
                        style={{ textAlign: "center" }}
                    >
                        Наша команда 365events организована в 2022 году
                    </p>
                    <p className="About-Content-Inform-H2">
                        Мы молодая и активная команда профессионалов своего
                        дела!
                    </p>
                    <p className="About-Content-Inform-H2">
                        Наша команда состоит из опытных организаторов, которые
                        готовы превратить вашу идею праздника в реальность. Мы
                        предлагаем индивидуальный подход к каждому клиенту,
                        чтобы создать мероприятие, которое отвечает всем
                        требованиям и пожеланиям. У нас есть уникальные и
                        оригинальные идеи для каждого случая, чтобы сделать ваш
                        праздник незабываемым.
                    </p>
                </div>
                <div className="Rotate_Animation">
                    <img className="Rotate_Animation-Logo" src="./logo512.png" alt="" />
                </div>
                <div className="Go_To_Team">
                    <h4>Наша команда</h4>
                    <div className="arrow-4">
                        {/* <div className="arrow-4-main" onClick={() => {clicklHanler("team")}}> */}
                            {/* <div className="arrow-4-left"></div> */}
                            <div className="arrow-4-button" onClick={() => {clicklHanler("team")}}></div>
                        {/* </div> */}
                    </div>
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
    );
}
