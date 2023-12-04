import React, { useState } from "react";
import "./NewYearAndSanta.scss";
import BuyWindow from "../../components/BuyWindow/BuyWindow";


const forLittle = [
    // {
    //     title: 'Интерактивный спектакль',
    //     descryption: `
    //         Для детских учреждений – «В поисках Нового года».
    //         Дед Мороз и Снегурочка, плюс два-три 
    //         аниматора-персонажа. Продолжительность 40 минут.
    //     `,
    //     price: 'от 40 000 руб.',
    //     photo: [
            
        // ]
    // },
    {
        title: '15 минутная программа',
        descryption: `
            Сумма может меняться в зависимости 
            от дат и времени - чем ближе к Новогоднему
            бою курантов, тем и стоимость будет выше...
        `,
        inServises: [
            '- появление и приветствие Снегурочки, знакомство с детьми/ребенком',
            '- призыв Деда Мороза, «Елочка, гори!»',
            '- 1-2 игры',
            '- стишок для Деда Мороза/хоровод/песня с детьми (на выбор)',
            '- вручение подарков',
            '- фото на память',
        ],
        price: 'от 5000 руб.',
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
                card: "./img/NY/DedMorozVneDoma.jpg",
                id: 4,
            }, 
            {
                card: "./img/NY/DedMorozDeti.jpg",
                id: 5,
            },
        ]
    },
    {
        title: '30 минутная программа',
        descryption: `
            Сумма может меняться в зависимости от дат 
            и времени - чем ближе к Новогоднему бою курантов, 
            тем и стоимость будет выше
        `,
        inServises: [
            '- появление и приветствие Снегурочки, знакомство с детьми/ребенком',
            '- призыв Деда Мороза, «Елочка, гори!»',
            '- 3-5 игр или мастер-класс (за доп. плату)',
            '- волшебное ведро от Деда Мороза',
            '- стишок для Деда Мороза/хоровод/песня с детьми (на выбор)',
            '- вручение подарков',
            '- фото на память',
        ],
        price: 'от 7000 руб.',
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
                card: "./img/NY/DedMorozVneDoma.jpg",
                id: 4,
            }, 
            {
                card: "./img/NY/DedMorozDeti.jpg",
                id: 5,
            },
        ]
    },
    {
        title: '45 минутная программа',
        descryption: `
            Сумма может меняться в зависимости от дат и 
            времени - чем ближе к Новогоднему бою курантов, 
            тем и стоимость будет выше... 
        `,
        inServises: [
            '- появление и приветствие Снегурочки, знакомство с детьми/ребенком',
            '- призыв Деда Мороза, «Елочка, гори!»',
            '- 5-7 игр или мастер-класс (за доп. Плату в зависимости от сложности и используемых материалов)',
            '- волшебное ведро от Деда Мороза',
            '- стишок для Деда Мороза/хоровод/песня с детьми (на выбор)',
            '- вручение подарков',
            '- фото на память',
        ],
        price: 'от 9000 руб.',
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
        ]
    },
]

export default function KidNY({ setIsModalCard, data }) {
    const [fullSizeImg, setFullSizeImg] = useState(null)
    const [choiceShow, setChoiceShow] = useState(forLittle[0]);
    const [selectImage, setSelectImage] = useState(forLittle[0].photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

    return (
        <div className="Price-Services_Card KidNY" style={{display:'flex', flexDirection:'column'}}>
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
                    width: "90%",
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
                                <p  onClick={() => {
                                    setChoiceShow(el)
                                    document
                                    .querySelector("#newYear")
                                    .scrollIntoView({ behavior: "smooth" });
                                }}
                                
                                >{el.title}</p>
                            </div>
                        </>
                    );
                })}
            </div>
            {choiceShow &&
                <>
                    <div className="KidNY-Content">
                        <div className="KidNY-Content-Left_Content">
                            {choiceShow.photo &&
                                <>
                                    <div className="KidNY-Content-Left_Content-MainPhoto">
                                        <img className="KidNY-Content-Left_Content-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                    </div>
                                    <div className="KidNY-Content-Left_Content-PhotoList">
                                        <div className="KidNY-Content-Left_Content-PhotoList-Slider">
                                            {choiceShow.photo.map((el) => {
                                                return (
                                                    <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "KidNY-Content-Left_Content-PhotoList-Slider-Select_Card" : "KidNY-Content-Left_Content-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                )
                                            })}
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                        <div className="KidNY-Content-Right_Content">
                            <div className="KidNY-Content-Right_Content-Description">
                                <p className="KidNY-Content-Right_Content-Description-Text">
                                    {choiceShow.descryption}
                                </p>
                                {choiceShow.inServises &&
                                    <ul>
                                        {choiceShow.inServises.map((el) => {
                                            return (
                                                <li className="KidNY-Content-Right_Content-Description-Text">{el}</li>
                                            )
                                        })}
                                    </ul>
                                } 
                            </div>
                            <div className="KidNY-Content-Right_Content-Price">
                                <p className="KidNY-Content-Right_Content-Price-Text">
                                    {choiceShow.price}
                                </p>
                                <p
                                    onClick={() => setIsOpenOrderWindow(true)}
                                    className='KidNY-Content-Right_Content-Price-Button_Buy'
                                >Заказать</p>

                            </div>
                        </div>
                        {fullSizeImg &&
                            <div onClick={() => setFullSizeImg(null)} className="KidNY-FullIMG">
                            <div
                               onClick={() => {
                                   setFullSizeImg(null);
                               }}
                               className="KidNY-FullIMG-Btn_Close"
                           >
                               X
                           </div>
                                <img onClick={() => setFullSizeImg(null)} className="KidNY-FullIMG-Img" src={fullSizeImg} alt="" />
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
