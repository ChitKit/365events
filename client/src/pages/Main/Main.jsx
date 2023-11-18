import React, { useEffect, useState } from "react";
import "./Main.scss";
import '../About/About.scss'
import About from "../About/About";
import Price from "../Price/Price";
import Contacts from "../Contacts/Contacts";
import Team from "../Team/Team";
import NewYearAndSanta from "../NewYearAndSanta/NewYearAndSanta";
import axios from 'axios';

export default function Main() {
    const [salut, setSalut] = useState(false)
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

    //! Get запрос на определение ip
    // axios.get('https://api.ipify.org/')
    // .then((response) => {
    //     console.log(response.data);
    //     let collection = ''
    //     document.addEventListener("keydown", function (event) {
    //         if (event.key === "Р") {
    //             collection += "Р"
    //         }
    //         if (collection[0] === "Р" && event.key === "и") {
    //             if (collection.length === 1) {
    //                 collection += "и"
    //             }
    //         }
    //         if (collection[0] === "Р" && collection[1] === "и" && event.key === "т") {
    //             if (collection.length === 2) {
    //                 collection += "т"
    //             }
    //         }
    //         if (collection[0] === "Р" && collection[1] === "и" && collection[2] === "т" && event.key === "а") {
    //             if (collection.length === 3) {
    //                 collection += "а"
    //                 console.log(collection.legnth);
    //                 if (collection === "Рита") {
    //                     setSalut(true)
    //                     document
    //                     .querySelector("#main")
    //                     .scrollIntoView({ behavior: "smooth" });
    //                 }
    //             }
    //         }
    //         if (collection === "Рита" && event.key === "Escape") {
    //             setSalut(false)
    //         }
    //         console.log(collection);
    //     });
    // });
    

    const goToNYhandler = () => {
        
        document
        .querySelector("#newYear")
        .scrollIntoView({ behavior: "smooth" });
    }

    const text = 'Привет, эту пасхалку я сделал в самом начале проекта.'
    const msg = text.split()
  


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
            <img onClick={goToNYhandler} className={loadNYimg ? "MainPage-Bell_New_Year" : "MainPage-Bell_New_Year_Hide"} src="./img/NYPNG.png" alt="bell" />
            
            {salut &&
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
            }
            </div>
            <div id='about' className="Anchor-IdAbout"></div>
            <About />
            <div id='team' className="Anchor-IdTeam"></div>
            <Team />
            <div id='services' className="Anchor-IdServices"></div>
            <Price />
            <div id='newYear' className="Anchor-IdNewYear"></div>
            <NewYearAndSanta />
            <div id='contacts' className="Anchor-IdContacts"></div>
            <Contacts />
            {/* <div onClick={() => {setOpenRecallMe(!openRecallMe)}} className={openRecallMe ? "RecallMe_Active" : "RecallMe"}></div> */}
        </div>
    );
}
