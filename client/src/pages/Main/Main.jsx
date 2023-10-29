import React, { useEffect, useState } from "react";
import "./Main.scss";
import '../About/About.scss'
import MainLayout from "../../Layout/MainLayout";
import About from "../About/About";
import Price from "../Price/Price";
import Contacts from "../Contacts/Contacts";
import { Link } from "react-router-dom";
import Team from "../Team/Team";

export default function Main() {
    const [loadDescription, setLoadDescription] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setLoadDescription(true)
        }, 2000);
    }, [])
    

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
            {/* <a href="/" class="btn-flip" data-back="Заказать праздник" data-front="Заказать праздник"></a> */}
            </div>
            <div id='about' className="Anchor-IdAbout"></div>
            <About />
            <div id='team' className="Anchor-IdTeam"></div>
            <Team />
            <div id='services' className="Anchor-IdServices"></div>
            <Price />
            <div id='contacts' className="Anchor-IdContacts"></div>
            <Contacts />
            {/* <div onClick={() => {setOpenRecallMe(!openRecallMe)}} className={openRecallMe ? "RecallMe_Active" : "RecallMe"}></div> */}
        </div>
    );
}
