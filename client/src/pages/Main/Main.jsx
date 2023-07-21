import React, { useEffect, useState } from "react";
import "./Main.scss";
import '../About/About.scss'
import MainLayout from "../../Layout/MainLayout";
import About from "../About/About";
import Price from "../Price/Price";
import Contacts from "../Contacts/Contacts";
import { Link } from "react-router-dom";
import Team from "../Team/Team";

export default function Main({}) {
    // h2 всплывает на красивом фоне (рамка )
    return (
        <div className="Application-Content">
            <div id="main" className="MainPage">
                <h1 style={{ position: "absolute", top:'5%', zIndex: "2" }}
                    className="MainPageH1-Top">
                    Агентство праздников
                </h1>
                <div className="MainPageH1Div">
                    <h1
                        style={{ position: "relative", zIndex: "2" }}
                        className="MainPageH1-Logo"
                    >
                        365:events
                    </h1>
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
            <About />
            <Team />
            <Price />
            <Contacts />
        </div>
    );
}
