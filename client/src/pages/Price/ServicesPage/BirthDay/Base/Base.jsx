import React, { useState } from 'react'
import './Base.scss'
import BuyWindow from '../../../../../components/BuyWindow/BuyWindow'

export default function Base_BirthDay({ data, setFullSizeImg }) {
    const [selectImage, setSelectImage] = useState(data.photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

  return (
    <div className="Base_BirthDay">
        <div className="Base_BirthDay-Info">
            <div className="Base_BirthDay-Info-Main_Info_Show">
                {data.photo &&
                    <>
                        <>
                            <div className="Base_BirthDay-Info-Main_Info_Show-MainPhoto">
                                    <img className="Base_BirthDay-Info-Main_Info_Show-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                
                            </div>
                            <div className="Base_BirthDay-Info-Main_Info_Show-PhotoList">
                                <div className="Base_BirthDay-Info-Main_Info_Show-PhotoList-Slider">
                                        {data.photo.map((el) => {
                                            return (
                                                <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "Base_BirthDay-Info-Main_Info_Show-PhotoList-Slider-Select_Card" : "Base_BirthDay-Info-Main_Info_Show-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                )
                                        })}
                                </div>
                            </div>
                        </>
                    </>
                }
            </div>
            <div className="Base_BirthDay-Info-Description">
                <p>{data.description}</p>
                <span className="Base_BirthDay-Info-Description-More">Подробности <a target="_blank"  href="https://vk.com/uslugi-216716498?section=section&section_id=HUkaVBkGWldzRwcDWVg2&w=product-216716498_8074443%2Fquery" rel="noreferrer">здесь</a> </span>
            </div>
            <div className="Base_BirthDay-Info-Buy">
                <p className="Base_BirthDay-Info-Buy-Text">
                    {data.price}
                </p>
                <p 
                    onClick={() => setIsOpenOrderWindow(true)}
                    className='Base_BirthDay-Info-Buy-Button_Buy'
                >Заказать</p>
            </div>
        </div>
        {isOpenOrderWindow &&
            <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={`День рождения (${data.name})`}/>
        }
    </div>
  )
}