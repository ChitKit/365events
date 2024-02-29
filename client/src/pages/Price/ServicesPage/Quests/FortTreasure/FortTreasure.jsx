import React, { useState } from "react";
import "./FortTreasure.scss";
import BuyWindow from "../../../../../components/BuyWindow/BuyWindow";

export default function FortTreasure({ data, setFullSizeImg }) {
    const [selectImage, setSelectImage] = useState(data.photo[0])
    const [isOpenOrderWindow, setIsOpenOrderWindow] = useState(false)

    return (
        <div className="FortTreasure">
            <div className="FortTreasure-Info">
                <div className="FortTreasure-Info-Main_Info_Show">
                    {data.photo && (
                        <>
                            <>
                                <div className="PriceCard-Content-Left_Content-MainPhoto">
                                    <img
                                        className="PriceCard-Content-Left_Content-MainPhoto-Img"
                                        onClick={() =>
                                            setFullSizeImg(selectImage.card)
                                        }
                                        id=""
                                        src={selectImage.card}
                                        alt="mainPhoto"
                                    />
                                </div>
                                <div className="PriceCard-Content-Left_Content-PhotoList">
                                    <div className="PriceCard-Content-Left_Content-PhotoList-Slider">
                                        {data.photo.map((el) => {
                                            return (
                                                <img
                                                    onClick={() => {
                                                        setSelectImage(el);
                                                    }}
                                                    className={
                                                        selectImage.id === el.id
                                                            ? "PriceCard-Content-Left_Content-PhotoList-Slider-Select_Card"
                                                            : "PriceCard-Content-Left_Content-PhotoList-Slider-Card"
                                                    }
                                                    id={el.id}
                                                    src={el.card}
                                                    alt={`${el.card}${el.id}`}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        </>
                    )}
                </div>
                <div className="FortTreasure-Info-Description">
                    <p>{data.description}</p>
                    <p className="FortTreasure-Info-Description-More">
                        Подробности{" "}
                        <a
                            target="_blank"
                            href="https://vk.com/uslugi-216716498?section=section&section_id=HUkaVBkGWldzRwcDWVg2&w=product-216716498_7841689%2Fquery"
                            rel="noreferrer"
                        >
                            тут
                        </a>
                    </p>
                </div>
                <div className="FortTreasure-Info-Buy">
                    <p className="FortTreasure-Info-Buy-Text">
                        {data.price}
                    </p>
                    <p 
                        onClick={() => setIsOpenOrderWindow(true)}
                        className='FortTreasure-Info-Buy-Button_Buy'
                    >Заказать</p>
                </div>
            </div>
            {isOpenOrderWindow &&
                <BuyWindow isOpen={isOpenOrderWindow} setIsOpen={setIsOpenOrderWindow} title={`Квест ${data.name}`}/>
            }
        </div>
    );
}
