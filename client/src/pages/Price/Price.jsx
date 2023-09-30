import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/MainLayout'
import './Price.scss'

export default function Price() {

    const [category, setCategory] = useState(null)
    const [categoryPhoto, setCategoryPhoto] = useState([])
    const [servicesCardData, setServicesCardData] = useState(null)

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

    const artists = [
        {img:'./img/Services/Artists/Illusions.jpeg', name:'Иллюзионисты', description:''},
        {img:'./img/Services/Artists/ShowMan.jpeg', name:'Ведущие', description:''},
        {img:'./img/Services/Artists/Artist_Services.jpeg', name:'Артисты', description:''},
    ]
    const programms = [ 
        {img:'./img/Services/Programms/BirthdDay.jpeg', name:'Дни рождения', description:''},
        {img:'./img/Services/Programms/KidOut.jpeg', name:'Детские выпускные', description:''},
        {img:'./img/Services/Programms/Quest.jpeg', name:'Квесты', description:''},
        {img:'./img/Services/Programms/Quiz.jpeg', name:'Квизы', description:''},
        {img:'./img/Services/Programms/Show.jpeg', name:'Шоу', description:''},
    ]
    const newYear = [
        {img:'./img/Services/NewYear/DedMoroz.jpeg', name:'Дед Мороз и Снегурочка', description:''},
        {img:'./img/Services/NewYear/InteractiveSpectacle.jpeg', name:'Интерактивный спектакль', description:''},
    ]

    const forSell = [
        {img:'./img/Services/ForSell/AquaGrimmAndBeautyBar.jpeg', name:'Аквагрим и Бьюти-бар', description:''},
        {img:'./img/Services/ForSell/BentaCake.jpeg', name:'Бенто-торты', description:''},
        {img:'./img/Services/ForSell/CakePops2.jpeg', name:'Кейк-попсы', description:''},
        {img:'./img/Services/ForSell/PhotoAndVideo.jpeg', name:'Фото и Видео услуги', description:''},
        {img:'./img/Services/ForSell/PhotoZone.jpeg', name:'Фотозона', description:''},
        {img:'./img/Services/ForSell/Pinyata.jpeg', name:'Пиньята', description:''},
        {img:'./img/Services/ForSell/Pryaniki.jpeg', name:'Архангельские пряники', description:''},
    ]

    const imgMK = [
        {img:'./img/Services/MK/CakePops.jpeg', name:'Кейк-попсы', description:''},
        {img:'./img/Services/MK/CatchSleep.jpeg', name:'Ловцы снов', description:''},
        {img:'./img/Services/MK/Capitoshki.jpeg', name:'Капитошки', description:''},
        {img:'./img/Services/MK/ClothDecoration.jpeg', name:'Декорирование одежды', description:''},
        {img:'./img/Services/MK/Florarium.jpeg', name:'Флорариум', description:''},
        {img:'./img/Services/MK/Pryaniki2.jpeg', name:'Архангельские пряники', description:''},
        {img:'./img/Services/MK/SinelnayaRipe.jpeg', name:'Синельная проволока', description:''},
        {img:'./img/Services/MK/Slime.jpeg', name:'Слаймы', description:''},
        {img:'./img/Services/MK/Tvisting.jpeg', name:'Твистинг', description:''},
    ]

    const handlerChoiceCategory = (category) => {
        setCategory(category)

        if (category === 'Артисты') {
            setCategoryPhoto(artists)
        } else if (category === 'Программы') {
            setCategoryPhoto(programms)
        } else if (category === 'Мастер классы') {
            setCategoryPhoto(imgMK)
        } else if (category === 'Новый год') {
            setCategoryPhoto(newYear)
        } else if (category === 'Другие услуги') {
            setCategoryPhoto(forSell)
        } else if (category === 'Готовим') {
            setCategoryPhoto([])
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
                            <img onClick={() => {setServicesCardData(el)}} className="Price-CardList-CardServices" src={el.img} alt="" />
                        )
                    }
                    )}
                </div>
                }
            {servicesCardData &&
            <div className="Price-Services_Card">
                <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">X</div>
                <img style={{width:'var(--width-content_price)', height:'var(--height_content_price)', borderRadius: '2em 0em'}} src={servicesCardData.img} alt={servicesCardData.name} />
                <div className="Price-Services_Card-Info">
                    <p>{servicesCardData.name}</p>
                    <p>{servicesCardData.description}</p>
                </div>
            </div>
            }
        </div>
    )
}
