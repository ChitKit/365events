import React, { useEffect, useState } from "react";
import "./Main.scss";
import '../About/About.scss'
import About from "../About/About";
import Price from "../Price/Price";
import Contacts from "../Contacts/Contacts";
import Team from "../Team/Team";
import NewYearAndSanta from "../NewYearAndSanta/NewYearAndSanta";
// import axios from 'axios';

export default function Main() {
    // const [salut, setSalut] = useState(false)
    const [loadDescription, setLoadDescription] = useState(false)
    const [loadNYimg, setLoadNYimg] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoadDescription(true)
        }, 2000);
        setTimeout(() => {
            setLoadNYimg(true)
        }, 4000);
    }, [])

    const goToNYhandler = () => {
        
        document
        .querySelector("#newYear")
        .scrollIntoView({ behavior: "smooth" });
    }

    // const text = 'Привет, эту пасхалку я сделал в самом начале проекта.'
    // const msg = text.split()
  
    

    return (
        <div className="Application-Content">
            <div id="main" className="MainPage">
                <div className="MainPageH1Div1">
                    <br />
                    <span>
                    Агентство праздников
                    </span>
                </div>
                {/* <h1 style={{ position: "absolute", top:'5%', zIndex: "2" }}
                    className="MainPageH1-Top">
                    Агентство праздников
                </h1> */}
                <div className="MainPageH1Div">
                    <br />
                    <span>
                        {/* <h1
                            style={{ position: "relative", zIndex: "2" }}
                            className="MainPageH1-Logo"
                        > */}
                            365:events
                        {/* </h1> */}
                    </span>
                    {/* <p>{navigator.platform}</p> */}
                </div>
                <div className="MainPageH2Div">
                    {loadDescription &&
                        <div className="MainPageH2">
                                <br />
                                <span>Доставляем </span>
                                <span> с </span>
                                <span> любовью </span>
                                <br />
                                <span> самые </span>
                                <span> тёплые </span>
                                <span> и </span>
                                <span> волшебные </span>
                                <span> праздники </span>
                                <br />
                                <span> 365 </span>
                                <span> дней </span>
                                <span> в </span>
                                <span> году </span>
                                <span>.</span>
                        </div>
                    }
                </div>
            {/* <img onClick={goToNYhandler} className={loadNYimg ? "MainPage-Bell_New_Year" : "MainPage-Bell_New_Year_Hide"} src="./img/NYPNG.png" alt="bell" /> */}
            
            {/* {salut &&
                <div  className="Salut">
                    <div className="Salut-Container">
                        <div id="content" className="Salut-Container-Text">
                            {msg.map((el) => {
                                return (
                                <p>{el}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            } */}
            </div>
            <div id='about' className="Anchor-IdAbout">
                <img style={{width:'100%', height:'100%'}} src="/img/block_wall.png" alt="" />
            </div>
            <About />
            <div id='team' className="Anchor-IdTeam">
                <img style={{width:'100%', height:'100%'}} src="/img/block_wall.png" alt="" />
            </div>
            <Team />
            <div id='services' className="Anchor-IdServices">
                <img style={{width:'100%', height:'100%'}} src="/img/block_wall.png" alt="" />
            </div>
            <Price />
            <div id='newYear' className="Anchor-IdNewYear">
                <img style={{width:'100%', height:'100%'}} src="/img/block_wall.png" alt="" />
            </div>
            <NewYearAndSanta />
            <div id='contacts' className="Anchor-IdContacts">
                <img style={{width:'100%', height:'100%'}} src="/img/block_wall.png" alt="" />
            </div>
            <Contacts />
            {/* <div onClick={() => {setOpenRecallMe(!openRecallMe)}} className={openRecallMe ? "RecallMe_Active" : "RecallMe"}></div> */}
        </div>
    );
}
