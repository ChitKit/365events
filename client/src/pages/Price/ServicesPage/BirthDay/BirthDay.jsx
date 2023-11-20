import React, { useEffect, useState } from "react";
import "./BirthDay.scss";
import { birthDay } from "../../servicesCatalog";
import Base from "./Base/Base";
import Standart from "./Standart/Standart";
import VIP from "./VIP/VIP";

export default function BirthDay({ setServicesCardData }) {
    const [choiceBirthDay, setChoiceBirthDay] = useState(birthDay[0]);
    const [fullSizeImg, setFullSizeImg] = useState(null)
    console.log();
    useEffect(() => {
        setChoiceBirthDay(birthDay[0])
    },[])

    return (
        <div className="Price-Services_Card BirthDay" style={{display:'flex', flexDirection:'column'}}>
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
                            <p onClick={() => {
                                setChoiceBirthDay(el)
                                document
                                .querySelector("#services")
                                .scrollIntoView({ behavior: "smooth" });
                                }} >{el.name}</p>
                        </div>
                    );
                })}
            </div>
                {
                    choiceBirthDay.name === 'Базовый' ?
                    <Base setServicesCardData={setServicesCardData} data={choiceBirthDay} setFullSizeImg={setFullSizeImg}/>
                    :
                    choiceBirthDay.name === 'Стандарт' ?
                    <Standart setServicesCardData={setServicesCardData} data={choiceBirthDay} setFullSizeImg={setFullSizeImg}/>
                    :
                    choiceBirthDay.name === 'VIP' &&
                    <VIP setServicesCardData={setServicesCardData} data={choiceBirthDay} setFullSizeImg={setFullSizeImg}/>
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
