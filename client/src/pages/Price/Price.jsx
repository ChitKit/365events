import React, {  useState } from 'react'
import './Price.scss'
import {
    artists,
    programms,
    forSell,
    imgMK
} from './servicesCatalog'
// import NewYearAndSanta from './ServicesPage/NewYearAndSanta/NewYearAndSanta'
import Illusioniists from './ServicesPage/Artists/Illusioniists/Illusioniists'
import Shows from './ServicesPage/Shows/Shows'
import Quests from './ServicesPage/Quests/Quests'
import BirthDay from './ServicesPage/BirthDay/BirthDay'
import Outday from './ServicesPage/Outday/Outday'
import PriceCard from './PriceCard'

export default function Price() {

    const [category, setCategory] = useState(null)
    const [categoryPhoto, setCategoryPhoto] = useState([])
    const [servicesCardData, setServicesCardData] = useState(null)

    const categoryListFirst = [
        {path:'./img/Category/Artist.jpeg', category:'Артисты'},
        {path:'./img/Category/Programms.jpeg', category:'Программы'},
        {path:'./img/Category/MasterClass.jpeg', category:'Мастер классы'},
    ]
    const categoryListSecond = [
        // {path:'./img/Category/NewYear.jpeg', category:'Новый год'},
        {path:'./img/Category/OtherServices.jpeg', category:'Другие услуги'},
        {path:'./img/Category/ComingSoon.jpeg', category:'Готовим'},
    ]


    const handlerChoiceCategory = (category) => {
        setCategory(category)

        if (category === 'Артисты') {
            setCategoryPhoto(artists)
        } else if (category === 'Программы') {
            setCategoryPhoto(programms)
        } else if (category === 'Мастер классы') {
            setCategoryPhoto(imgMK)
        // } else if (category === 'Новый год') {
        //     setCategoryPhoto(newYear)
        } else if (category === 'Другие услуги') {
            setCategoryPhoto(forSell)
        } else if (category === 'Готовим') {
            setCategoryPhoto([])
        }
    }

    return (
        <div className="Price">
            {category !== null && servicesCardData === null &&
                <img src='/IconBack.png' alt='buttonBack' className='Price-Button_Close_Category' style={{position:'absolute', left:'20%'}} onClick={() => {setCategory(null)}} />
            }
            {!servicesCardData &&
                <h1 style={{fontSize:'var(--tittle_module_font_size)'}}>
                    {category === null ?
                    'Наши услуги'
                    :
                    category
                    }
                </h1>
            }
            {servicesCardData === null && 
                <>
                    { category === null ?
                        <div className="Price-CategoryList">
                            <>    
                                {categoryListFirst && categoryListFirst.map((el) => {
                                    return (
                                        <img onClick={() => {
                                            handlerChoiceCategory(el.category)
                                            document
                                            .querySelector("#services")
                                            .scrollIntoView({ behavior: "smooth" });
                                        }} className='Price-CategoryList-Card' src={el.path} alt="pic" />
                                        )
                                })}
                                {categoryListSecond && categoryListSecond.map((el) => {
                                    return (
                                        <img onClick={() => {
                                            handlerChoiceCategory(el.category)
                                            document
                                            .querySelector("#services")
                                            .scrollIntoView({ behavior: "smooth" });
                                        }} className='Price-CategoryList-Card' src={el.path} alt="pic" />
                                        )
                                })}
                            </>
                        </div>
                        :
                        <div className='Price-CardList'>
                            {categoryPhoto && categoryPhoto.map((el) => {
                                return (
                                    <img onClick={() => {
                                        setServicesCardData(el)
                                        document
                                        .querySelector("#services")
                                        .scrollIntoView({ behavior: "smooth" });
                                    }} className="Price-CardList-CardServices" src={el.img} alt="" />
                                )
                            }
                            )}
                        </div>
                    }
                </>
            }
            
            {
            servicesCardData && servicesCardData.name === 'Иллюзионисты' ?
                <Illusioniists setServicesCardData={setServicesCardData} />
            :
            servicesCardData && servicesCardData.name === 'Шоу' ?
                <Shows setServicesCardData={setServicesCardData} />
            :
            servicesCardData && servicesCardData.name === 'Квесты' ?
                <Quests setServicesCardData={setServicesCardData} />
            :
            servicesCardData && servicesCardData.name === 'Дни рождения' ?
                <BirthDay setServicesCardData={setServicesCardData} />
            :
            servicesCardData && servicesCardData.name === 'Детские выпускные' ?
                <Outday setServicesCardData={setServicesCardData} />
            :
            servicesCardData &&
            <PriceCard dataCard={servicesCardData} setData={setServicesCardData} />
            // <div className="Price-Services_Card">
            //     <div onClick={() => {setServicesCardData(null)}} className="Price-Services_Card-Button_Close">
            //         <img src="/icons/icon_close.png" alt="button_Close" />
            //     </div>
            //     <img style={{width:'var(--width-content_price)', height:'var(--height_content_price)', borderRadius: '2em 0em'}} src={servicesCardData.img} alt={servicesCardData.name} />
            //     <div className="Price-Services_Card-Info">
            //         <p className="Price-Services_Card-Info-Description-Title" >{servicesCardData.name}</p>
            //         <div
            //             style={{width:'90%'}}    
            //         >
            //             <p className="Price-Services_Card-Info-Description"  style={{textAlign:'left'}}>{servicesCardData.description}</p>
            //         </div>
            //         <div className="Price-Services_Card-Info-Description-Buy">
            //             <p className="Price-Services_Card-Info-Description-Buy-Price">{servicesCardData.price}</p>
            //             <div
            //                 className='Price-Services_Card-Info-Description-Buy-Button'
            //             >Заказать</div>
            //         </div>
            //     </div>
            // </div>
            }
        </div>
    )
}
