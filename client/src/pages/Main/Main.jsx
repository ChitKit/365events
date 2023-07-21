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
                <div className="MainPageH1Div">
                    <h1
                        style={{ position: "relative", zIndex: "2" }}
                        className="MainPageH1"
                    >
                        Агентство праздников <br />
                        365:events
                    </h1>
                </div>

                <div className="MainPageH2Div">
                    <h2
                        style={{ position: "relative", zIndex: "2" }}
                        className="MainPageH2"
                    >
                        Доставляем с любовью самые тёплые и волшебные
                        праздники 365 дней в году.
                    </h2>
                </div>
            </div>
            <About />
            <Team />
            <Price />
            <Contacts />
        </div>
    );
}
