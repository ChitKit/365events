import React, { useEffect, useState } from "react";
import "./Shows.scss";
import { shows } from "../../servicesCatalog";
import AlchimyShow from "./AlchimyShow/AlchimyShow";
import BubbleShow from "./BubbleShow/BubbleShow";
import PaperShow from "./PaperShow/PaperShow";

export default function Shows({ setServicesCardData }) {
    const [choiceShow, setChoiceShow] = useState(shows[0]);

    useEffect(() => {
        return () => {
            setChoiceShow(shows[0]);
        };
    }, []);

    return (
        <div className="Price-Services_Card Shows" style={{display:'flex', flexDirection:'column'}}>
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
                        <div className={choiceShow.name === el.name ? "Show_Active" : "Show_Choice"} >
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
            {
                choiceShow.name === 'Химическое шоу' ?
                    <AlchimyShow setServicesCardData={setServicesCardData} data={choiceShow}/>
                :
                choiceShow.name === 'Шоу мыльных пузырей' ?
                    <BubbleShow setServicesCardData={setServicesCardData} data={choiceShow}/>
                :
                choiceShow.name === 'Бумажное шоу' &&
                    <PaperShow setServicesCardData={setServicesCardData} data={choiceShow}/>
            }
            {/* <img style={{width:'var(--width-content_price)', height:'var(--height_content_price)', borderRadius: '2em 0em'}} src={servicesCardData.img} alt={servicesCardData.name} />
        <div className="Price-Services_Card-Info">
            <p>{servicesCardData.name}</p>
            <p>{servicesCardData.description}</p>
        </div> */}
        </div>
    );
}
