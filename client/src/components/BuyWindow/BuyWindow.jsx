import React from "react";
import "./BuyWindow.scss";

export default function BuyWindow({ isOpen, setIsOpen, title }) {
    return (
        <div className={isOpen ? "BuyWindow" : "BuyWindow_Hide"}>
            {title && (
                <div className="BuyWindow-Header">
                    <p>Заказ</p>
                    <p>"{title}"</p>
                </div>
            )}
            <div
                onClick={() => {
                    setIsOpen(false);
                }}
                className="Price-Services_Card-Button_Close"
            >
                <img src="/icons/icon_close.png" alt="button_Close" />
            </div>
            <div className="BuyWindow-Content">
                <h6>Для заказа Вы можете позвонить, или написать нам!</h6>
                <div className="BuyWindow-Content-Data">
                    <div>
                        <p>Телефон:</p>
                        <a href="tel:+79890490402">8(989)049-04-02</a>
                    </div>
                    <div>
                        <p>email:</p>
                        <p>events.365@yandex.ru</p>
                    </div>
                </div>
                <h6>Или связаться с нами через социальные сети</h6>
                <div className="BuyWindow-Content-Links">
                    <a
                        target="_blank"
                        href="https://vk.com/agency365"
                        rel="noreferrer"
                    >
                        <img src="/icons/icon_VK.png" alt="image_vk" />
                    </a>
                    <a
                        target="_blank"
                        href={`https://wa.me/+79890490402`}
                        rel="noreferrer"
                    >
                        <img src="/icons/icon_WA.png" alt="image_whatsapp" />
                    </a>
                    <a
                        target="_blank"
                        href={`https://t.me/zakaz365events`}
                        rel="noreferrer"
                    >
                        <img src="/icons/icon_TG.png" alt="image_telegram" />
                    </a>
                </div>
            </div>
        </div>
    );
}
