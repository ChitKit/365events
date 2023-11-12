import React, { useState } from "react";
import "./NewYearAndSanta.scss";

const forLittle = [
    {
        title: 'На улице (30 минут)',
        descryption: `
        Сумма может меняться в зависимости от дат и времени - чем ближе к Новогоднему бою курантов, тем и стоимость будет выше... 
        `,
        inServises: [
            '- появление и приветствие Снегурочки. Песня Снегурочки',
            '- призыв Деда Мороза, приветствие. ',
            '- 3-5 игр (подвижные и, возможно, загадки)',
            '- Хоровод с ДМ и С.',
            '- фото на память',
            'Обязательно будут микрофоны и музыкальное сопровождение',
        ],
        price: 'от 8000 руб.',
        photo: [
            {
                card: "./img/NY/DedMorozVzroslym.jpg",
                id: 1,
            }, 
            {
                card: "./img/NY/DedMorozVneDoma.jpg",
                id: 2,
            }, 
            {
                card: "./img/NY/DedMorozDeti.jpg",
                id: 3,
            }, 
            {
                card: "./img/NY/DedMorozVzroslym.jpg",
                id: 4,
            }, 
            {
                card: "./img/NY/DedMorozDeti.jpg",
                id: 5,
            }, 
            {
                card: "./img/NY/DedMorozVneDoma.jpg",
                id: 6,
            }
        ]
    },
    {
        title: 'В учреждении (45 минут)',
        descryption: `
            Сумма может меняться в зависимости от дат и времени - чем ближе к Новогоднему бою курантов, тем и стоимость будет выше... 
        `,
        inServises: [
            '- появление и приветствие Снегурочки, знакомство с гостями',
            '- призыв Деда Мороза, «Елочка, гори!»',
            '- На выбор: игры и конкурсы (3-7), загадки, песни, мастер-класс',
            '- Хоровод м ДМ и С. Песенка ДМ и С/С',
            '- вручение подарков',
            '- фото на память',
            'Возможны дополнительные персонажи – от 3500 за выступление',
            'Дополнительно предоставим новогоднюю фотозону – от 25000',
        ],
        price: 'от 12000 руб.',
        photo: [
            {
                card: "./img/NY/DedMorozVzroslym.jpg",
                id: 1,
            }, 
            {
                card: "./img/NY/DedMorozVneDoma.jpg",
                id: 2,
            }, 
            {
                card: "./img/NY/DedMorozDeti.jpg",
                id: 3,
            }, 
            {
                card: "./img/NY/DedMorozVzroslym.jpg",
                id: 4,
            }, 
            {
                card: "./img/NY/DedMorozDeti.jpg",
                id: 5,
            }, 
            {
                card: "./img/NY/DedMorozVneDoma.jpg",
                id: 6,
            }
        ]
    },
]

export default function OutDoorNY({ setIsModalCard }) {
    const [choiceShow, setChoiceShow] = useState(forLittle[0]);
    const [selectImage, setSelectImage] = useState(forLittle[0].photo[0])

    return (
        <div className="Price-Services_Card OutDoorNY" style={{display:'flex', flexDirection:'column'}}>
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
                            <div className={choiceShow.title === el.title ? "OutDoorNY_Active" : "OutDoorNY_Choice"} >
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
                    <div className="OutDoorNY-Content">
                        <div className="OutDoorNY-Content-Left_Content">
                            {choiceShow.photo &&
                                <>
                                    <div className="OutDoorNY-Content-Left_Content-MainPhoto">
                                        <img id="" src={selectImage.card} alt='mainPhoto' />
                                    </div>
                                    <div className="OutDoorNY-Content-Left_Content-PhotoList">
                                        {choiceShow.photo.map((el) => {
                                            return (
                                                <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "OutDoorNY-Content-Left_Content-PhotoList-Select_Card" : "OutDoorNY-Content-Left_Content-PhotoList-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                            )
                                        })}
                                    </div>
                                </>
                            }
                        </div>
                        <div className="OutDoorNY-Content-Right_Content">
                            <div className="OutDoorNY-Content-Right_Content-Description">
                                <p className="OutDoorNY-Content-Right_Content-Description-Text">
                                    {choiceShow.descryption}
                                </p>
                                {choiceShow.inServises &&
                                    <ul>
                                        {choiceShow.inServises.map((el) => {
                                            return (
                                                <li>{el}</li>
                                            )
                                        })}
                                    </ul>
                                } 
                            </div>
                            <div className="OutDoorNY-Content-Right_Content-Price">
                                <p className="OutDoorNY-Content-Right_Content-Price-Text">
                                    {choiceShow.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    );
}