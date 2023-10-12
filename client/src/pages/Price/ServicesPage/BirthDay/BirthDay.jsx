import React, { useEffect, useState } from "react";
import "./BirthDay.scss";
import { shows } from "../../servicesCatalog";

export default function BirthDay({ setServicesCardData }) {
    const [choiceShow, setChoiceShow] = useState(shows[0]);

    useEffect(() => {
        return () => {
            setChoiceShow(shows[0]);
        };
    }, []);

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
                {shows.map((el) => {
                    return (
                        <div className={choiceShow.name === el.name ? "BirthDay_Active" : "BirthDay_Choice"} >
                            {/* <img
                                style={{ width: "25vh" }}
                                src={el.img}
                                alt=""
                            /> */}
                            <p onClick={() => {setChoiceShow(el)}} >{el.name}</p>
                        </div>
                    );
                })}
            </div>
            {/* {
                choiceShow.name === 'Химическое шоу' ?
                    <AlchimyShow setServicesCardData={setServicesCardData} data={choiceShow}/>
                :
                choiceShow.name === 'Шоу мыльных пузырей' ?
                    <BubbleShow setServicesCardData={setServicesCardData} data={choiceShow}/>
                :
                choiceShow.name === 'Бумажное шоу' &&
                    <PaperShow setServicesCardData={setServicesCardData} data={choiceShow}/>
            } */}
        </div>
    );
}
