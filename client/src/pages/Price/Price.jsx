import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/MainLayout'
import './Price.scss'

export default function Price() {

    const [category, setCategory] = useState(null)
    const [categoryPhoto, setCategoryPhoto] = useState([])

    const categoryListFirst = [
        {path:'./img/category/Artist.jpeg', category:'Артисты'},
        {path:'./img/category/Programms.jpeg', category:'Программы'},
        {path:'./img/category/MasterClass.jpeg', category:'Мастер классы'},
    ]
    const categoryListSecond = [
        {path:'./img/category/NewYear.jpeg', category:'Новый год'},
        {path:'./img/category/OtherServices.jpeg', category:'Другие услуги'},
        {path:'./img/category/ComingSoon.jpeg', category:'Готовим'},
    ]

    const programms = [ 
        './img/Services/Programms/BirthdDay.jpeg', './img/Services/Programms/DJ.jpeg', './img/Services/Programms/Illusions.jpeg', 
        './img/Services/Programms/InteractiveSpectacle.jpeg', './img/Services/Programms/KidOut.jpeg', './img/Services/Programms/Quest.jpeg', 
        './img/Services/Programms/Quiz.jpeg', './img/Services/Programms/Show.jpeg', './img/Services/Programms/ShowMan.jpeg',
    ]
    const newYear = [
        './img/Services/NewYear/DedMoroz.jpeg'
    ]

    const forSell = [
        './img/Services/ForSell/AquaGrimmAndBeautyBar.jpeg', './img/Services/ForSell/BentaCake.jpeg', './img/Services/ForSell/CakePops2.jpeg', 
        './img/Services/ForSell/PhotoAndVideo.jpeg', './img/Services/ForSell/PhotoZone.jpeg', './img/Services/ForSell/Pinyata.jpeg', './img/Services/ForSell/Pryaniki.jpeg'
    ]

    const imgMK = [
        './img/Services/MK/CakePops.jpeg', './img/Services/MK/CatchSleep.jpeg', './img/Services/MK/Capitoshki.jpeg', 
        './img/Services/MK/ClothDecoration.jpeg', './img/Services/MK/Florarium.jpeg', './img/Services/MK/Pryaniki2.jpeg', 
        './img/Services/MK/SinelnayaRipe.jpeg', './img/Services/MK/Slime.jpeg', './img/Services/MK/Tvisting.jpeg'
    ]

    const handlerChoiceCategory = (category) => {
        setCategory(category)

        if (category === 'Артисты') {
            setCategoryPhoto()
        } else if (category === 'Программы') {
            setCategoryPhoto(programms)
        } else if (category === 'Мастер классы') {
            setCategoryPhoto(imgMK)
        } else if (category === 'Новый год') {
            setCategoryPhoto(newYear)
        } else if (category === 'Другие услуги') {
            setCategoryPhoto(forSell)
        } else if (category === 'Готовим') {
            setCategoryPhoto()
        }
    }

    return (
        <div className="Price">
            {category !== null &&
                <img src='/IconBack.png' alt='buttonBack' className='Price-Button_Close_Category' style={{position:'absolute', left:'20%'}} onClick={() => {setCategory(null)}} />
            }
            <h1 style={{fontSize:'var(--tittle_module_font_size)'}}>
                {category === null ?
                'Наши услуги'
                :
                category
                }
            </h1>
            {category === null ?
                <div className="Price-CategoryList">
                    <>    
                        {categoryListFirst && categoryListFirst.map((el) => {
                            return (
                                <img onClick={() => {handlerChoiceCategory(el.category)}} className='Price-CategoryList-Card' src={el.path} alt="pic" />
                                )
                        })}
                        {categoryListSecond && categoryListSecond.map((el) => {
                            return (
                                <img onClick={() => {handlerChoiceCategory(el.category)}} className='Price-CategoryList-Card' src={el.path} alt="pic" />
                                )
                        })}
                    </>
                </div>
                :
                <div className='Price-CardList' style={{display:'flex', width:'100%', flexWrap:'wrap', maxHeight:'68%', overflowY:'auto'}}>
                    {categoryPhoto && categoryPhoto.map((el) => {
                        return (
                            <img style={{width:'16%', margin:'1em'}} src={el} alt="" />
                        )
                    }
                    )}
                </div>
                }
        </div>
    )
}
