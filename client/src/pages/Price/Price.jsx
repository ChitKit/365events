import React, { useEffect, useState } from 'react'
import MainLayout from '../../Layout/MainLayout'
import './Price.scss'

export default function Price() {

    const [category, setCategory] = useState(null)
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

  const imgList = [
    './img/services/a1.jpg', './img/services/a2.jpg', './img/services/a3.jpg', './img/services/a4.jpg', './img/services/m1.jpg', './img/services/m2.jpg', './img/services/m3.jpg', './img/services/m4.jpg',
    './img/services/m5.jpg', './img/services/m6.jpg', './img/services/mk1.jpg', './img/services/mk2.jpg', './img/services/mk3.jpg', './img/services/mk4.jpg', './img/services/mk5.jpg', './img/services/mk6.jpg',
    './img/services/mk7.jpg', './img/services/mk8.jpg', './img/services/mk9.jpg', './img/services/mk10.jpg', './img/services/mk11.jpg', './img/services/mk12.jpg', './img/services/mk13.jpg', './img/services/mk14.jpg',
    './img/services/s1.jpg', './img/services/s2.jpg', './img/services/s3.jpg', './img/services/v1.jpg', './img/services/v2.jpg', './img/services/v3.jpg', './img/services/w1.jpg', './img/services/w2.jpg',
    './img/services/w3.jpg', './img/services/w4.jpg', './img/services/w5.jpg', './img/services/w6.jpg', './img/services/w7.jpg', './img/services/w8.jpg', './img/services/w9.jpg'
]

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
                                <img onClick={() => {setCategory(el.category)}} className='Price-CategoryList-Card' src={el.path} alt="pic" />
                                )
                        })}
                        {categoryListSecond && categoryListSecond.map((el) => {
                            return (
                                <img onClick={() => {setCategory(el.category)}} className='Price-CategoryList-Card' src={el.path} alt="pic" />
                                )
                        })}
                    </>
                </div>
                :
                <div className='Price-CardList' style={{display:'flex', width:'100%', flexWrap:'wrap', maxHeight:'68%', overflowY:'auto'}}>
                    {imgList && imgList.map((el) => {
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
