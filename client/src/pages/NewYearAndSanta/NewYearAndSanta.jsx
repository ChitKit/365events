import React, { useState } from 'react'
import './NewYearAndSanta.scss'
import KidNY from './KidNY';
import ForBigNY from './ForBigNY';
import OutDoorNY from './OutDoorNY';

const categoryList = [
    {
        title: 'Дед мороз для детей',
        photo: './img/NY/DedMorozDeti.jpg',
    },
    {
        title: 'Дед мороз для взрослых',
        photo: './img/NY/DedMorozVzroslym.jpg',
    },
    {
        title: 'Дед мороз вне дома',
        photo: './img/NY/DedMorozVneDoma.jpg',
    }
    //   'ИНТЕРАКТИВНЫЙ СПЕКТАКЛЬ', 'ДЕД МОРОЗ И СНЕГУРОЧКА на дом к ДЕТЯМ', 'ДЕД МОРОЗ И СНЕГУРОЧКА на дом к ВЗРОСЛЫМ', 
    //   'ДЕД МОРОЗ И СНЕГУРОЧКА на корпоратив', 'ДЕД МОРОЗ И СНЕГУРОЧКА на улице (30 минут)', 'ДЕД МОРОЗ И СНЕГУРОЧКА в учреждении (45 минут)'
]

export default function NewYearAndSanta() {

    const [isModalCard, setIsModalCard] = useState(false)
    const [choiceNewYearAndSanta, setChoiceNewYearAndSanta] = useState();

    return (
        <div className="NewYearAndSanta" style={{ display: 'flex', flexDirection: 'column' }}>
        {isModalCard ?
            <>
            {choiceNewYearAndSanta &&
                <>
                    {
                        choiceNewYearAndSanta.title === 'Дед мороз для детей' ?
                            <KidNY
                                data={choiceNewYearAndSanta}
                                setIsModalCard={setIsModalCard}
                            />
                            :
                            choiceNewYearAndSanta.title === 'Дед мороз для взрослых' ?
                                <ForBigNY
                                    data={choiceNewYearAndSanta}
                                    setIsModalCard={setIsModalCard}
                                />
                                :
                                choiceNewYearAndSanta.title === 'Дед мороз вне дома' &&
                                <OutDoorNY
                                    data={choiceNewYearAndSanta}
                                    setIsModalCard={setIsModalCard}
                                />
                    }
                </>
            }
            </>
            :
            <>
            <h1 className='NewYearAndSanta-Title' style={{ fontSize: 'var(--tittle_module_font_size)' }}>
                Новый год
            </h1>
            <p className="NewYearAndSanta-Main_description">
                Наши Дед Мороз и Снегурочка с радостью готовы прийти к Вам не только домой,
                но и поиграть с детишками на улице, в детском саду, детском доме и центре
                детского творчества, посетить ваших родных в больнице, пансионате для пожилых.
                И, конечно, у нас есть уникальные и оригинальные программы для взрослых на
                корпоратив. Наши Дед Мороз и Снегурочка придут в красивых «Боярских» нарядах,
                с уникальным реквизитом ручной работы (посох, волшебное ведро)
                и подарками/сувенирами из «Мастерской Деда Мороза».
            </p>
            <div
                style={{
                    width: "100%",
                    height: "50%",
                    display: "flex",
                    flexWrap: 'wrap',
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {categoryList.map((el) => {
                    return (
                        <div
                            className='NewYearAndSanta-Category_Card'
                        >
                            {/* <img
                            style={{ width: "25vh" }}
                            src={el.img}
                            alt=""
                            /> */}
                            <img
                                onClick={() => { 
                                    setChoiceNewYearAndSanta(el); 
                                    setIsModalCard(true);
                                    document
                                    .querySelector("#newYear")
                                    .scrollIntoView({ behavior: "smooth" });
                                
                                }}
                                className='NewYearAndSanta-Category_Card-Img'
                                style={{
                                    width: "65%",
                                }} src={el.photo} alt="" />
                            <p
                                className='NewYearAndSanta-Category_Card-Title'
                            >{el.title}</p>
                        </div>
                    );
                })}
            </div>
            </>
        }
    </div>
    )
}