import React, { useEffect, useState } from "react";
import "./NewYearAndSanta.scss";


const forLittle = [
    {
        title: 'Интерактивный спектакль',
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

export default function KidNY({ setIsModalCard }) {
    const [choiceShow, setChoiceShow] = useState(forLittle[0]);
    const [classChange, setClassChange] = useState(false)

    setInterval(() => {
        setClassChange(!classChange)
    }, 3000);

    return (
        <div className={classChange ? "Price-Services_Card KidNY" : "Price-Services_Card KidNY_change"} style={{display:'flex', flexDirection:'column'}}>
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
                {forLittle.map((el, i) => {
                    return (
                        <div className={choiceShow.title === el.title ? "KidNY_Active" : "KidNY_Choice"} >
                            {/* <img
                                style={{ width: "25vh" }}
                                src={el.img}
                                alt=""
                            /> */}
                            <p onClick={() => {setChoiceShow(el)}} >{el.title}</p>
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
            {/* <img style={{width:'var(--width-content_price)', height:'var(--height_content_price)', borderRadius: '2em 0em'}} src={servicesCardData.img} alt={servicesCardData.name} />
        <div className="Price-Services_Card-Info">
            <p>{servicesCardData.name}</p>
            <p>{servicesCardData.description}</p>
        </div> */}
        </div>
    );
}
