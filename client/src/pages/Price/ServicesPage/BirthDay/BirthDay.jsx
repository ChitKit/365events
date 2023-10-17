import React, { useState } from "react";
import "./BirthDay.scss";
import { birthDay } from "../../servicesCatalog";
import Base from "./Base/Base";
import Standart from "./Standart/Standart";
import VIP from "./VIP/VIP";

export default function BirthDay({ setServicesCardData }) {
    const [choiceBirthDay, setChoiceBirthDay] = useState('info');
    console.log();

    return (
        <div className="Price-Services_Card BirthDay" style={{display:'flex', flexDirection:'column'}}>
            <div
                onClick={() => {
                    setServicesCardData(null);
                }}
                className="Price-Services_Card-Button_Close"
            >
                X
            </div>
            <div
                style={{
                    width: "100%",
                    height: "10%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                
                {choiceBirthDay !== null && birthDay.map((el) => {
                    return (
                        <div className={choiceBirthDay && choiceBirthDay.name === el.name ? "BirthDay_Active" : "BirthDay_Choice"} >
                            {/* <img
                                style={{ width: "25vh" }}
                                src={el.img}
                                alt=""
                            /> */}
                            <p onClick={() => {setChoiceBirthDay(el)}} >{el.name}</p>
                        </div>
                    );
                })}
            </div>
                {
                    choiceBirthDay.name === 'Базовый' ?
                    <Base setServicesCardData={setServicesCardData} data={choiceBirthDay}/>
                    :
                    choiceBirthDay.name === 'Стандарт' ?
                    <Standart setServicesCardData={setServicesCardData} data={choiceBirthDay}/>
                    :
                    choiceBirthDay.name === 'VIP' ?
                    <VIP setServicesCardData={setServicesCardData} data={choiceBirthDay}/>
                    :
                    choiceBirthDay === 'info' &&
                    <div className="BirthDay-Info">
                        <p>
                            Поможем организовать День рождения в любом формате под ключ🗝️ 
                            У нас есть 3 варианта программ и всегда подарки от агентства! 
                            Прежде, чем решить вопрос с Днем рождения, прочтите нашу статью <a target="_blank"  href="https://vk.com/@agency365-spasaem-detskii-den-rozhdeniya" rel="noreferrer">здесь</a> 
                        </p>
                    </div>
                }
        </div>
    );
}
