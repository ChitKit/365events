import React, { useEffect, useState } from "react";
import "./Quests.scss";
import { quests } from "../../servicesCatalog";
import Flint from "./Flint/Flint";
import FortTreasure from "./FortTreasure/FortTreasure";

export default function Quests({ setServicesCardData }) {
    const [choiceQuest, setChoiceQuest] = useState(quests[0]);
    const [fullSizeImg, setFullSizeImg] = useState(null)
    console.log(choiceQuest);
    console.log(quests);
    useEffect(() => {
        return () => {
            setChoiceQuest(quests[0]);
        };
    }, []);

    return (
        <div className="Price-Services_Card Quests" style={{display:'flex', flexDirection:'column'}}>
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
                {quests.map((el) => {
                    return (
                        <div className={choiceQuest.name === el.name ? "Quest_Active" : "Quest_Choice"} >
                            {/* <img
                                style={{ width: "25vh" }}
                                src={el.img}
                                alt=""
                            /> */}
                            <p onClick={() => {
                                setChoiceQuest(el)
                                document
                                .querySelector("#services")
                                .scrollIntoView({ behavior: "smooth" });
                                }} >{el.name}</p>
                        </div>
                    );
                })}
            </div>
            {
                choiceQuest.name === 'Тайник Флинта' ?
                    <Flint setServicesCardData={setServicesCardData} data={choiceQuest} setFullSizeImg={setFullSizeImg}/>
                :
                choiceQuest.name === 'В поисках сокровища Форта' &&
                    <FortTreasure setServicesCardData={setServicesCardData} data={choiceQuest} setFullSizeImg={setFullSizeImg}/>
            }
            
            {fullSizeImg &&
                            <div onClick={() => setFullSizeImg(null)} className="PriceCard-FullIMG">
                            <div
                               onClick={() => {
                                   setFullSizeImg(null);
                               }}
                               className="PriceCard-FullIMG-Btn_Close"
                           >
                               X
                           </div>
                                <img onClick={() => setFullSizeImg(null)} className="PriceCard-FullIMG-Img" src={fullSizeImg} alt="" />
                            </div>
                        }
        </div>
    );
}
