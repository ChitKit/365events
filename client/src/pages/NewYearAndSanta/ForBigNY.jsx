import React, { useEffect, useState } from "react";
import "./NewYearAndSanta.scss";

const forBiggest = [
    {
        title: 'Корпоратив',
        descryption: '',
        price: '',
        photo: {
            
        }
    },
    {
        title: '15 минутная программа',
        descryption: '',
        price: '',
        photo: {
            
        }
    },
    {
        title: '30 минутная программа',
        descryption: '',
        price: '',
        photo: {
            
        }
    },
    {
        title: '45 минутная программа',
        descryption: '',
        price: '',
        photo: {
            
        }
    },
]

export default function ForBigNY({ setIsModalCard }) {
    const [choiceShow, setChoiceShow] = useState(forBiggest[0]);
    const [classChange, setClassChange] = useState(false)

    setInterval(() => {
        setClassChange(!classChange)
    }, 3000);

    return (
        <div className={classChange ? "Price-Services_Card ForBigNY" : "Price-Services_Card ForBigNY_change"} style={{display:'flex', flexDirection:'column'}}>
            <div
                onClick={() => {
                    setIsModalCard(false);
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
                {forBiggest.map((el, i) => {
                    return (
                        <>
                            <div className={choiceShow.title === el.title ? "ForBigNY_Active" : "ForBigNY_Choice"} >
                                {/* <img
                                    style={{ width: "25vh" }}
                                    src={el.img}
                                    alt=""
                                /> */}
                                <p onClick={() => {setChoiceShow(el)}} >{el.title}</p>
                            </div>
                        </>
                    );
                })}
            </div>
            {choiceShow && 
                <>
                    <div 
                        
                        style={{
                            width: "80%",
                        }}
                        className="ForBigNY-Description">
                        <p className="ForBigNY-Description-Text">
                            {choiceShow.descryption}
                        </p>
                    </div>
                    <div className="ForBigNY-Price">
                        <p className="ForBigNY-Price-Text">
                            {choiceShow.price}
                        </p>
                    </div>
                </>
            }
        </div>
    );
}
