import React, { useEffect, useState } from "react";
import "./Price.scss";



export default function PriceCard({ dataCard, setData }) {
    const [fullSizeImg, setFullSizeImg] = useState(null)
    const [selectImage, setSelectImage] = useState(dataCard.photo[0])

    
    return (
        <div className="Price-Services_Card PriceCard" style={{display:'flex', flexDirection:'column'}}>
            {!fullSizeImg &&
                <div
                    onClick={() => {
                        setData(null);
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
                {/* {dataCard.map((el, i) => {
                    return (
                        <>
                            <div className={choiceShow.title === el.title ? "PriceCard_Active" : "PriceCard_Choice"} >
                                <p  onClick={() => {setChoiceShow(el)}} >{el.title}</p>
                            </div>
                        </>
                    );
                })} */}
            </div>
            {dataCard &&
                <>
                    <div className="PriceCard-Content">
                        <div className="PriceCard-Content-Left_Content">
                            {dataCard.photo &&
                                <>
                                    <>
                                        <div className="PriceCard-Content-Left_Content-MainPhoto">
                                                <img className="PriceCard-Content-Left_Content-MainPhoto-Img" onClick={() => setFullSizeImg(selectImage.card)} id="" src={selectImage.card} alt='mainPhoto' />
                                            
                                        </div>
                                        <div className="PriceCard-Content-Left_Content-PhotoList">
                                            <div className="PriceCard-Content-Left_Content-PhotoList-Slider">
                                                    {dataCard.photo.map((el) => {
                                                        return (
                                                            <img onClick={() => {setSelectImage(el)}} className={selectImage.id === el.id ? "PriceCard-Content-Left_Content-PhotoList-Slider-Select_Card" : "PriceCard-Content-Left_Content-PhotoList-Slider-Card"} id={el.id} src={el.card} alt={`${el.card}${el.id}`} />
                                                            )
                                                    })}
                                            </div>
                                        </div>
                                    </>
                                </>
                            }
                        </div>
                        <div className="PriceCard-Content-Right_Content">
                            <div className="PriceCard-Content-Right_Content-Description">
                                <p className="PriceCard-Content-Right_Content-Description-Text">
                                    {dataCard.description}
                                </p>
                                {/* {dataCard.inServises &&
                                    <ul>
                                        {dataCard.inServises.map((el) => {
                                            return (
                                                <li className="PriceCard-Content-Right_Content-Description-Text">{el}</li>
                                            )
                                        })}
                                    </ul>
                                }  */}
                            </div>
                            <div className="PriceCard-Content-Right_Content-Price">
                                <p className="PriceCard-Content-Right_Content-Price-Text">
                                    {dataCard.price}
                                </p>
                            </div>
                        </div>
                        {fullSizeImg &&
                            <div onClick={() => setFullSizeImg(null)} className="PriceCard-FullIMG">
                            <div
                               onClick={() => {
                                   setFullSizeImg(null);
                               }}
                               className="PriceCard-FullIMG-Btn_Close"
                           >
                               X
                           </div>
                                <img onClick={() => setFullSizeImg(null)} className="PriceCard-FullIMG-Img" src={fullSizeImg} alt="" />
                            </div>
                        }
                    </div>
                </>
            }
        </div>
    );
}
