import React, { useEffect } from "react";
// import NavBar from "../NavBar/NavBar";
import "./Header.scss";
import { useState } from "react";

export default function Header({firstLoadApp}) {
    const [colorHeader, setColorHeader] = useState(null);
    const [widthScreen, setWidthScreen] = useState(undefined);
    console.log(firstLoadApp);
    useEffect(() => {
        if (widthScreen === undefined) {
            setWidthScreen(window.screen.width);
        }

        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setColorHeader({
                  background: "#1c0035",
                  border: "1px solid #ffff0078",
              })
            : setColorHeader({
                  background: "transparent",
                  border: "1px solid transparent",
              });
    };

    const clicklHanler = (path) => {
        console.log(path);
        if (path === "main") {
            document
                .querySelector("#main")
                .scrollIntoView({ behavior: "smooth" });
        } else if (path === "about") {
            document
                .querySelector("#about")
                .scrollIntoView({ behavior: "smooth" });
        } else if (path === "price") {
            document
                .querySelector("#services")
                .scrollIntoView({ behavior: "smooth" });
        } else if (path === "contacts") {
            document
                .querySelector("#contacts")
                .scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={firstLoadApp ? "Header" : "Header_Hiden"}
            style={{
                backgroundColor: colorHeader && colorHeader.background,
                borderBottom: colorHeader && colorHeader.border,
                // height
            }}
        >
            <img src="/logo512.png" className="Header-logo" alt="logo" />
            <ul className="Header-Ul">
                <li className="Header-Ul-Li">
                    {/* <a href="#main">Главная</a> */}
                    <a
                        onClick={() => {
                            clicklHanler("main");
                        }}
                    >
                        Главная
                    </a>
                </li>
                <li className="Header-Ul-Li">
                    {/* <a href="#about">О нас</a> */}
                    <a
                        onClick={() => {
                            clicklHanler("about");
                        }}
                    >
                        О нас
                    </a>
                </li>
                <li className="Header-Ul-Li">
                    {/* <a href="#services">Услуги</a> */}
                    <a
                        onClick={() => {
                            clicklHanler("price");
                        }}
                    >
                        Услуги
                    </a>
                </li>
                <li className="Header-Ul-Li">
                    {/* <a href="#contacts">Контакты</a> */}
                    <a
                        onClick={() => {
                            clicklHanler("contacts");
                        }}
                    >
                        Контакты
                    </a>
                </li>
            </ul>
            {widthScreen > 700 &&
                <div className="Header-Integrations">
                    <a target="_blank" href="https://vk.com/agency365">
                        <img src="/img/icons8-vk-50.png" alt="image_vk" />
                    </a>
                    <a target="_blank" href="https://wa.me/+79890490402?text=Здравствуйте, хочу заказать у вас праздник">
                        <img src="/img/icons8-whatsapp-50.png" alt="image_whatsapp" />
                    </a>
                </div>
            }
            {/* <NavBar /> */}
        </div>
    );
}
