import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/MainLayout'
import './Price.scss'
import {
    artists,
    programms,
    newYear,
    forSell,
    imgMK
} from './servicesCatalog'
import NewYearAndSanta from './ServicesPage/NewYearAndSanta/NewYearAndSanta'
import Illusioniists from './ServicesPage/Artists/Illusioniists/Illusioniists'
import Shows from './ServicesPage/Shows/Shows'

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
                <div className='Price-CardList'>
                    {categoryPhoto && categoryPhoto.map((el) => {
                        return (
                            <img onClick={() => {setServicesCardData(el)}} className="Price-CardList-CardServices" src={el.img} alt="" />
                        )
                    }
                    )}
                </div>
                }
            {servicesCardData && servicesCardData.name === 'Дед Мороз и Снегурочка' ?
                <NewYearAndSanta setServicesCardData={setServicesCardData} />
            :
            servicesCardData && servicesCardData.name === 'Иллюзионисты' ?
                <Illusioniists setServicesCardData={setServicesCardData} />
            :
            servicesCardData && servicesCardData.name === 'Шоу' ?
                <Shows setServicesCardData={setServicesCardData} />
            :
            servicesCardData &&
            <div className="Price-Services_Card">
                <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">X</div>
                <img style={{width:'var(--width-content_price)', height:'var(--height_content_price)', borderRadius: '2em 0em'}} src={servicesCardData.img} alt={servicesCardData.name} />
                <div className="Price-Services_Card-Info">
                    <p>{servicesCardData.name}</p>
                    <div
                        style={{width:'90%'}}    
                    >
                        <p style={{textAlign:'left'}}>{servicesCardData.description}</p>
                    </div>
                    <p style={{marginBottom:'3em'}}>{servicesCardData.price}</p>
                </div>
            </div>
            }
        </div>
    )
}
