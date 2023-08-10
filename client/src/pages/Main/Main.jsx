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
                </div>
                <div className="MainPageH2Div">
                    <div className="MainPageH2">
                            <br />
                            <span>Доставляем </span>
                            <span> с </span>
                            <span> любовью </span>
                            <span> самые </span>
                            <span> тёплые </span>
                            <span> и </span>
                            <span> волшебные </span>
                            <span> праздники </span>
                            <span> 365 </span>
                            <span> дней </span>
                            <span> в </span>
                            <span> году </span>
                            <span>.</span>
                    </div>
                </div>
            </div>
            <div id='about' className="AnchorIdAbout"></div>
            <About />
            <div></div>
            <Team />
            <div id='services' className="AnchorIdServices"></div>
            <Price />
            <div id='contacts' className="AnchorIdContacts"></div>
            <Contacts />
            {/* <div onClick={() => {setOpenRecallMe(!openRecallMe)}} className={openRecallMe ? "RecallMe_Active" : "RecallMe"}></div> */}
        </div>
    );
}
