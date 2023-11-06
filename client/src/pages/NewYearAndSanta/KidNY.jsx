import React, { useEffect, useState } from "react";
import "./NewYearAndSanta.scss";


const forLittle = [
    // {
    //     title: 'Интерактивный спектакль',
    //     descryption: `
    //         Для детских учреждений – «В поисках Нового года».
    //         Дед Мороз и Снегурочка, плюс два-три 
    //         аниматора-персонажа. Продолжительность 40 минут.
    //     `,
    //     price: 'от 40 000 руб.',
    //     photo: {

    //     }
    // },
    {
        title: '15 минутная программа',
        descryption: `
            Сумма может меняться в зависимости 
            от дат и времени - чем ближе к Новогоднему
            бою курантов, тем и стоимость будет выше...
            
                - появление и приветствие Снегурочки, знакомство с детьми/ребенком
                - призыв Деда Мороза, «Елочка, гори!»
                - 1-2 игры
                - стишок для Деда Мороза/хоровод/песня с детьми (на выбор)
                - вручение подарков
                - фото на память
        `,
        price: 'от 5000 руб.',
        photo: {
            
        }
    },
    {
        title: '30 минутная программа',
        descryption: `
            Сумма может меняться в зависимости от дат 
            и времени - чем ближе к Новогоднему бою курантов, 
            тем и стоимость будет выше

                - появление и приветствие Снегурочки, знакомство с детьми/ребенком
                - призыв Деда Мороза, «Елочка, гори!»
                - 3-5 игр или мастер-класс (за доп. плату)
                - волшебное ведро от Деда Мороза
                - стишок для Деда Мороза/хоровод/песня с детьми (на выбор)
                - вручение подарков
                - фото на память
        `,
        price: 'от 7000 руб.',
        photo: {
            
        }
    },
    {
        title: '45 минутная программа',
        descryption: `
            Сумма может меняться в зависимости от дат и 
            времени - чем ближе к Новогоднему бою курантов, 
            тем и стоимость будет выше... 
            
                - появление и приветствие Снегурочки, знакомство с детьми/ребенком
                - призыв Деда Мороза, «Елочка, гори!»
                - 5-7 игр или мастер-класс (за доп. Плату в зависимости от сложности и используемых материалов)
                - волшебное ведро от Деда Мороза
                - стишок для Деда Мороза/хоровод/песня с детьми (на выбор)
                - вручение подарков
                - фото на память
        `,
        price: 'от 9000 руб.',
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
                        <>
                            <div className={choiceShow.title === el.title ? "KidNY_Active" : "KidNY_Choice"} >
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
                        className="KidNY-Description">
                        <p className="KidNY-Description-Text">
                            {choiceShow.descryption}
                        </p>
                    </div>
                    <div className="KidNY-Price">
                        <p className="KidNY-Price-Text">
                            {choiceShow.price}
                        </p>
                    </div>
                </>
            }
            {/* {
                choiceShow.title === 'Интерактивный спектакль' ?
                    <AlchimyShow setServicesCardData={setServicesCardData} data={choiceShow}/>
                :
                choiceShow.title === '15 минутная программа' ?
                    <BubbleShow setServicesCardData={setServicesCardData} data={choiceShow}/>
                :
                choiceShow.title === '30 минутная программа' ?
                    <PaperShow setServicesCardData={setServicesCardData} data={choiceShow}/>
                :
                choiceShow.title === '45 минутная программа' &&
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
