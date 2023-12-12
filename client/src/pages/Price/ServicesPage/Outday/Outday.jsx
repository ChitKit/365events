import React, { useState } from "react";
import "./Outday.scss";
import { outDay } from "../../servicesCatalog";
import Base from "./Base/Base";
import Standart from "./Standart/Standart";
import VIP from "./VIP/VIP";

export default function Outday({ setServicesCardData }) {
    const [choiceOutday, setChoiceOutday] = useState(outDay[0]);
    const [fullSizeImg, setFullSizeImg] = useState(null)
    console.log();

    return (
        <div className="Price-Services_Card Outday" style={{display:'flex', flexDirection:'column'}}>
            {!fullSizeImg &&
                <div
                    onClick={() => {
                        setServicesCardData(null);
                    }}
                    className="Price-Services_Card-Button_Close"
                >
                    <img src="/icons/icon_close.png" alt="button_Close" />
                </div>
            }
            <div className="Price-Services_Card-Category_List">
                
                {choiceOutday !== null && outDay.map((el) => {
                    return (
                        <div className={choiceOutday && choiceOutday.name === el.name ? "Outday_Active" : "Outday_Choice"} >
                            {/* <img
                                style={{ width: "25vh" }}
                                src={el.img}
                                alt=""
                            /> */}
                            <p onClick={() => {
                                setChoiceOutday(el)
                                document
                                .querySelector("#services")
                                .scrollIntoView({ behavior: "smooth" });
                                }} >{el.name}</p>
                        </div>
                    );
                })}
            </div>
                {
                    choiceOutday.name === 'Базовый' ?
                    <Base setServicesCardData={setServicesCardData} data={choiceOutday} setFullSizeImg={setFullSizeImg} />
                    :
                    choiceOutday.name === 'Стандарт' ?
                    <Standart setServicesCardData={setServicesCardData} data={choiceOutday} setFullSizeImg={setFullSizeImg} />
                    :
                    choiceOutday.name === 'VIP' &&
                    <VIP setServicesCardData={setServicesCardData} data={choiceOutday} setFullSizeImg={setFullSizeImg} />
                }
                {fullSizeImg &&
                    <div onClick={() => setFullSizeImg(null)} className="PriceCard-FullIMG">
                    <div
                        onClick={() => {
                            setFullSizeImg(null);
                        }}
                        className="PriceCard-FullIMG-Btn_Close"
                    >
                        <img src="/icons/icon_close.png" alt="button_Close" />
                    </div>
                        <img onClick={() => setFullSizeImg(null)} className="PriceCard-FullIMG-Img" src={fullSizeImg} alt="" />
                    </div>
                }
        </div>
    );
}
