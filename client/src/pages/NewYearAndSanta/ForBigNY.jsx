import React, { useState } from "react";
import "./NewYearAndSanta.scss";
import BuyWindow from "../../components/BuyWindow/BuyWindow";

const forBiggest = [
    {
        title: 'Корпоратив',
        descryption: `
            Мы сделаем ВСЕ, чтобы Вы вернулись в детство! 
            Пропишем индивидуальную программу для Вашей компании.
        `,
        inServises: [
        ],
        price: '30 минут выступления – 13000 руб.',
        photo: [
            {
                card: "./img/NY/DedMorozVzroslym.jpg",
                id: 1,
            },
            {
                card: "./img/services_card_photo/NY/BNY2.jpg",
                id: 2,
            }, 
            {
                card: "./img/services_card_photo/NY/BNY3.jpg",
                id: 3,
            },
            // {
            //     card: "./img/services_card_photo/NY/Kid4.jpg",
            //     id: 4,
            // }, 
            // {
            //     card: "./img/services_card_photo/NY/Org1.jpg",
            //     id: 5,
            // },
        ]
    },
    {
        title: 'На дом',
        descryption: `
            Что входит в программу? А ЭТО СЮРПРИЗ! Но обещаем, что будет весело!
        `,
        inServises: [
            // '• 15 минут – от 9000 рублей',
            // '• 30 минут – от 11000 рублей',
            // '• 45 минут – от 13000 рублей',
        ],
        price: 'от 9000 рублей',
        photo: [
            {
                card: "./img/NY/DedMorozVzroslym.jpg",
                id: 1,
            },
            {
                card: "./img/services_card_photo/NY/BNY2.jpg",
                id: 2,
            }, 
            {
                card: "./img/services_card_photo/NY/BNY3.jpg",
                id: 3,
            },
            // {
            //     card: "./img/NY/DedMorozVzroslym.jpg",
            //     id: 4,
            // }, 
            // {
            //     card: "./img/NY/DedMorozDeti.jpg",
            //     id: 5,
            // },
        ]
    },
]

export default function ForBigNY({ setIsModalCard, data }) {
    const [fullSizeImg, setFullSizeImg] = useState(null)
    const [choiceShow, setChoiceShow] = useState(forBiggest[0]);
    const [selectImage, setSelectImage] = useState(forBiggest[0].photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

    return (
        <div className="Price-Services_Card ForBigNY" style={{display:'flex', flexDirection:'column'}}>
            {!fullSizeImg &&
                <div
                    onClick={() => {
                        setIsModalCard(false);
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
                    <div className="ForBigNY-Content">
                        <div className="ForBigNY-Content-Left_Content">
                            {choiceShow.photo &&
                                <>
                                    <div className="ForBigNY-Content-Left_Content-MainPhoto">
                                        <img className="ForBigNY-Content-Left_Content-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                    </div>
                                    <div className="ForBigNY-Content-Left_Content-PhotoList">
                                        <div className="ForBigNY-Content-Left_Content-PhotoList-Slider">
                                            {choiceShow.photo.map((el) => {
                                                return (
                                                    <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "ForBigNY-Content-Left_Content-PhotoList-Slider-Select_Card" : "ForBigNY-Content-Left_Content-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="ForBigNY-Content-Right_Content">
                            <div className="ForBigNY-Content-Right_Content-Description">
                                <p className="ForBigNY-Content-Right_Content-Description-Text">
                                    {choiceShow.descryption}
                                </p>
                                {choiceShow.inServises &&
                                    <ul>
                                        {choiceShow.inServises.map((el) => {
                                            return (
                                                <li className="ForBigNY-Content-Right_Content-Description-Text">{el}</li>
                                            )
                                        })}
                                    </ul>
                                } 
                            </div>
                            <div className="ForBigNY-Content-Right_Content-Price">
                                <p className="ForBigNY-Content-Right_Content-Price-Text">
                                    {choiceShow.price}
                                </p>
                                <p
                                    onClick={() => setIsOpenOrderWindow(true)}
                                    className='ForBigNY-Content-Right_Content-Price-Button_Buy'
                                >Заказать</p>
                            </div>
                        </div>
                        {fullSizeImg &&
                            <div onClick={() => setFullSizeImg(null)} className="ForBigNY-FullIMG">
                                 <div
                                    onClick={() => {
                                        setFullSizeImg(null);
                                    }}
                                    className="ForBigNY-FullIMG-Btn_Close"
                                >
                                    <img src="/icons/icon_close.png" alt="button_Close" />
                                </div>
                                <img onClick={() => setFullSizeImg(null)} className="ForBigNY-FullIMG-Img" src={fullSizeImg} alt="" />
                            </div>
                        }
                    </div>
                </>
            }
            {isOpenOrderWindow &&
                <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={data.title}/>
            }
        </div>
    );
}
